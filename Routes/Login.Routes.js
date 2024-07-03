import { Router } from "express";
import passport from "passport";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWT_SECRET

const router = Router();

router.post('/login', passport.authenticate('local', {session: false}), async (req, res, next) => {
    try {
        //in this constant the info of user is being saved
        const user = req.user

        //payload for the jwt
        const payload = {
            sub: user.id
        }

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