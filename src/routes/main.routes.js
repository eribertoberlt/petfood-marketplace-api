const express = require('express');
const petshop = require('../models/petshop');
const router = express.Router();

const Petshop = require('../models/petshop');
const Products = require('../models/product');

router.get('/petshops', async (req, res) => {
    try {
        const petshops = await Petshop.find();
        res.json({ error: false, petshops });
    } catch(err) {
        res.json({ error: true, message: err.message });
    }
});

router.get('/petshop/:id', async (req, res) => {
    try {
        const petshop = await Petshop.findById(req.params.id);
        let products = await Products.find({
            petshop_id: petshop._id
        }); // se fosse usar split pelo id o pagar.me -> .populate('petshop_id', 'recipient_id');
        res.json({ error: false, petshop: { ...petshop._doc, products } });
    } catch(err) {
        res.json({ error: true, message: err.message });
    }
});

router.post('/purchase', async (req, res) => {
    try {
        
    } catch(err) {
        res.json({ error: true, message: err.message });
    }
});

module.exports = router;