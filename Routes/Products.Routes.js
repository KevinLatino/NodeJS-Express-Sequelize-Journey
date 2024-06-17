import { Router } from 'express';
import ProductService from '../Services/Product.Services.js';

const services = new ProductService();
const router = Router();


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

router.patch('/update/:id', async (req, res) => {
    const { id } = req.params;
    const parseId = parseInt(id);
    const body = req.body;
    const updateProduct = await services.updateProduct(parseId, body)
    res.json(updateProduct)
})

export default router;
