import { Router } from "express";
import RewardServices from "../Services/Rewards.services.js";

const Services = new RewardServices();
const router = Router();

router.post('/create', async (req, res) => {
    const body = req.body;
    const create = await Services.createReward(body);
    res.json(create);
})

export default router;
