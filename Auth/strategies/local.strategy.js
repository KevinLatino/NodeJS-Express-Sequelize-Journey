import { Strategy } from "passport-local";
import AuthServices from "../../Services/Auth.Services.js";

const localServices = new AuthServices();

const localStrategy = new Strategy({ usernameField: "email", passwordField: "password" }, async (email, password, done) => {
    try {
        const user = await localServices.findUser(email, password)
        done(null, user)
    } catch (error) {
        done(error, false)
    }
})

export default localStrategy