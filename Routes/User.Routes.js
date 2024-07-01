import { Router } from "express";
import UserServices from '../Services/User.Model.js'

const userServices = new UserServices();
const router = Router();

router.post('/create', async (req, res) => {
    const body = req.body;
    const create = await userServices.createUser(body);
    res.json(create)
})

export default router;