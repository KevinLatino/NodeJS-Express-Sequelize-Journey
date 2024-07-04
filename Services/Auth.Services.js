import UserServices from "../Services/User.Model.js";
import nodemailer from "nodemailer"
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

    async signJwt(user) {
        const payload = { sub: user.id }
        const secret = process.env.JWT_SECRET

        const token = jwt.sign(payload, secret)
        return token
    }

    async sendEmail(email) {
        try {
            const user = await userServices.findByEmail(email);
            if (!user) {
                throw boom.unauthorized();
            }
    
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: process.env.USER,
                    pass: process.env.PASS,
                },
            })
            await transporter.sendMail({
                from: process.env.USER,
                to: `${user.email}`,
                subject: "Probando correo",
                text: `Hola ${user.name}`,
                html: "<b>Arley Manco</b>"
            })
            return {message: "Mail sent"}   
        } catch (error) {
            return {message: "couldnt sent"}
        }
    }
}


export default AuthServices