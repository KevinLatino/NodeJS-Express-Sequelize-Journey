import UserServices from "../Services/User.Model.js";
import bcrypt from 'bcrypt'
import boom from "@hapi/boom";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config();

const userServices = new UserServices()

class AuthServices {

    async findUser(email, password) {
        //here we can find the email of a user
        const user = await userServices.findByEmail(email);
        if (!user) {
            throw boom.unauthorized();
        }
        //here we can find the password of a user
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            throw boom.unauthorized();
        }
        delete user.dataValues.password
        return user
    }

    async signJwt() {
        const payload = { sub: user.id }
        const secret = process.env.JWT_SECRET

        const token = jwt.sign(payload, secret)
        return token
    }
}


export default AuthServices