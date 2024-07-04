import { Router } from "express";
import passport from "passport";
import AuthServices from "../Services/Auth.Services.js";

const authService = new AuthServices();
const router = Router();

router.post('/login', passport.authenticate("local", { session: false }), async (req, res, next) => {
    try {
        const user = req.user
        const token = await authService.signJWT(user);
        res.json({user, token})
    } catch (error) {
        next(error)
    }
})

export default router;
