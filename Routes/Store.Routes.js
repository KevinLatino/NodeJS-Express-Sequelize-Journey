import express from 'express';
import StoreServices from '../Services/Store.Services.js';

const Services = new StoreServices();
const router = express.Router();

router.use(express.json());

router.get('/list', async (req, res) => {
    const getStores = await Services.getStores();
    return getStores;
});

router.post('/create', async (req, res) => {
    const body = req.body;
    const createStore = await Services.createStore(body);
    res.json(createStore);
})

export default router;