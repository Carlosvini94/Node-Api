const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find({}, {
            'title': 1,
            'descriítion': 1,
            'url': 1
        });

        return res.json(products);
    },

    async show(req, res) {
        const products = await Product.findById(req.params.id)

        return res.json(products)
    },

    async store(req, res) {
        let newProduct = new Product({
            ...req.body
        });
        newProduct = await newProduct.save();
        res.json(newProduct);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(product);
    },

    async delete(req, res) {
        const product = await Product.deleteOne({_id: req.params.id})

        return res.json(product);
    }

}