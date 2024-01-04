require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/users.jsx");
const routes = require('./router/user.jsx');
const Product = require('./router/Product.jsx');
const Order = require('./router/Order.jsx');
const OrderModel = require('./models/Order.jsx');

{/*app total function connect*/ }
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.use('/api/product', Product);
app.use('/api/order', Order);

{/*database connection*/ }
mongoose.connect("mongodb://127.0.0.1:27017/Aqua");

{/*login*/ }
app.post("/users", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The Passwword is Incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

{/*register form*/ }
app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

{/*order form*/ }
app.post("/Orders", (req, res) => {
  OrderModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

{/*server*/ }
app.listen(3001, () => {
  console.log("server is running");
});
