import UserServices from "../Services/User.Model.js";
import bcrypt from 'bcrypt'
import boom, { unauthorized } from "@hapi/boom";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config();

const userServices = new UserServices()

class AuthServices {

    async findUser (email, password) {
        //find
        const user = await userServices.findByEmail(email);
        if(!user){
            throw boom.unauthorized();
        }
        const passwordCompare = await bcrypt.compare(user.password, password);
        if(!passwordCompare){
            throw boom.unauthorized();
        }
        delete user.dataValues.password
        return user
    }

    async signJWT(user) {
        const payload = {
            sub: user.id
        }
        const secret = process.env.JWT_SECRET
        const token = jwt.sign(payload, secret)
        return token;
    }
}


export default AuthServices