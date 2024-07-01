import { Strategy } from "passport-local";
import UserServices from "../../Services/User.Model.js";
import bcrypt from 'bcrypt'
import boom from "@hapi/boom";

const userServices = new UserServices();

const localStrategy = new Strategy({ usernameField:"email", passwordField: "password" }, async (email, password, done) => {
    try {
        const user = await userServices.findByEmail(email);
        if (!user) {
            done(boom.unauthorized(), false)
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare){
            done(boom.unauthorized(), false)
        }
        delete user.dataValues.password
        done(null, user)
    } catch (error) {
        done(error, false)
    }
})

export default localStrategy