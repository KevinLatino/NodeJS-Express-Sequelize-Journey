import { Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config();

const router = Router();

router.post('/login', passport.authenticate('local', { session: false }), async (req, res, next) => {
    try {
        //here the info of user is being saved
        const user = req.user

        //payload for the jwt and secret
        const payload = {
            sub: user.id
        }

        const secret = process.env.JWT_SECRET

        const token = jwt.sign(payload, secret)

        res.json({
            user,
            token
        })
    } catch (error) {
        next(error)
    }
})

export default router;
