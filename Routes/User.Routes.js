import { Router } from "express";
import UserServices from "../Services/User.Services.js";

const userServices = new UserServices();
const router = Router()

router.post('/create', async (req, res) => {
    const bodyUser = req.body
    const newUser = await userServices.createUSer(bodyUser)
    res.json(newUser);
})

export default router