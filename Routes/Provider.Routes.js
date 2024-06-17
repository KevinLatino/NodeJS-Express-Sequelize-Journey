import { Router } from "express";
import ProviderServices from "../Services/Provider.Services.js";

const Services = new ProviderServices();
const router = Router();

router.get('/list', async (req, res) => {
    const getProviders = await Services.getAllProviders();
    res.json(getProviders);
})

router.post('/create', async (req, res) => {
    const body = req.body
    const createProvider = await Services.createProvider(body);
    res.json(createProvider);
});

export default router;