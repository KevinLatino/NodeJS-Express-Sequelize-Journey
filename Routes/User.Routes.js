import { Router } from "express";
import UserService from "../Services/User.Services.js";

const userService = new UserService();
const router = Router();

router.post('/create', async (req, res) => {
    const body = req.body;
    const newUser = await userService.createUser(body)
    res.json(newUser) 
})

export default router