const router = require('express').Router();
const Product = require('../models/Product.jsx');

//createNew
router.post('/create/new', async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const saveProduct = await newProduct.save();
        res.status(200).json(saveProduct)
    } catch {
        res.status(500).json(err)
    }
});

//GetAll
router.get('/all', async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;
        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            })
        } else {
            products = Product.find();
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});


//delete
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id)
        if (!deleted) {
            return res.status(404).json({ message: 'Product not found' })
        }
        return res.status(200).json(deleted)
    } catch (error) {
        return res.status(500).json({ ...error })
    }
});

module.exports = router;