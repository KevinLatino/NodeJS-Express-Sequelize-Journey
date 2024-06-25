import { Strategy } from "passport-local";
import bcrypt from 'bcrypt';
import boom from "@hapi/boom";
import UserService from "../../Services/User.Services.js";

const service = new UserService();

const localStrategy = new Strategy({usernameField: "email",passwordField: "password"}, async (email, password, done) => {
        try {
            const user = await service.findByEmail(email);
            if (!user) {
                done(boom.unauthorized(), false)
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                done(boom.unauthorized(), false)
            }
            delete user.dataValues.password
            done(null, user);
        } catch (error) {
            done(error, false);
        }
    }
);



export default localStrategy