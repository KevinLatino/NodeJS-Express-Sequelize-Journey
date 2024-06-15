import express from 'express';
import ProductService from '../Services/Product.Services.js';

const services = new ProductService();
const router = express.Router();

router.use(express.json())

router.get('/list', async (req, res) => {
    try {
        const getAll = await services.getAllproducts();
        res.json(getAll);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/create', async (req, res) => {
    const body = req.body;
    const createProduct = await services.createProduct(body);
    res.json(createProduct);
});

export default router;
