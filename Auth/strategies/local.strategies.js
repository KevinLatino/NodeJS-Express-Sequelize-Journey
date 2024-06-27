import { Strategy } from "passport-local";
import UserServices from "../../Services/User.Services.js";
import bcrypt from 'bcrypt'
import boom from '@hapi/boom'


const userServices = new UserServices();

const localStrategy = new Strategy({ usernameField: "email", passwordField: "password" }, async (email, password, done) => {
    try {
        const user = await userServices.findEmail(email)
        if (!user) {
            done(boom.unauthorized(), false)
        }
        const passwordMatched = await bcrypt.compare(password, user.password)
        if (!passwordMatched) {
            done(boom.unauthorized(), false)
        }
        delete user.dataValues.password
        done(null, user)
    } catch (error) {
        done(error, false)
    }
});

export default localStrategy;


