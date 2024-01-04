const express = require("express");
const User = require("../models/users.jsx");
const bcrypt = require("bcryptjs");
const router = express.Router();
const generateToken = require("../utils/index.jsx");
const verifyToken = require("../middleware/index.jsx");

const nodemailer = require("nodemailer");

{/*restapi connect*/ }
router.get("/test", (req, res) => res.json({ message: "API connected" }));

{/*new user create*/ }
router.post("/user", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword });

    await newUser.save();

    return res.status(201).json({ message: "user Created" });
  }

  res.status(404).json({ message: "User Already Exists" });
});

{/*user verify*/ }
router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Incorrect Passwword" });
  }
  const token = generateToken(user);
  res.json({ token });
});

{/*verfty token checker*/ }
router.get("/data", verifyToken, (req, res) => {
  res.json({ message: `Welcome,${req.user.email}! This is Protected Data` });
});

{/*resetpassword*/ }
router.post("/reset-password", async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "user Not Found" });
  }

  const token = Math.random().toString(36).slice(-8);
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 3600000; //1hour

  await user.save();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "selvapandi283@gmail.com",
      pass: "kifm rmrp vmmf mvnh"
    },
  })
  const message = {
    from: 'selvapandi283@gmail.com',
    to: user.email,
    subject: "Password rest Request",
    text: `You are receiving this email because you (or someone else) has requested a password reset for your account.
       \n\n Please use The token to rest your password: ${token}\n\n
       If you did not request a password reset,please ignore this email.`
  };
  transporter.sendMail(message, (err, info) => {
    if (err) {
      res.status(404).json({ message: "Something Went Wrong, Try Again !" });
    }
    res.status(200).json({ message: "Password Rest Email sent" + info.response });
  })
});

{/*reset passeord with specific id*/ }
router.post("/reset-password/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(404).json({ message: "Invalid Token" });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  user.password = hashPassword;
  user.resetPasswordToken = null;
  user.resetPasswordExpires = null;

  await user.save();

  res.json({ message: "password reset Successfully" });
});

{/*update*/ }
router.put('/:id', async (req, res) => {
  if (req.body.userId == req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt)
    } try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      },
        { new: true }
      );
      res.status(200).json(updatedUser)
    } catch (err) {
      res.status(500).json(err)
    }
  } else {
    res.status(401).json("You Can only update Your profile")
  }
});

{/*delete*/ }
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) return res.status(404).json({ message: 'User not found' })

    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json(error)
  }
})

module.exports = router;
