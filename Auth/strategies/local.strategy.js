import { Strategy } from "passport-local";
import AuthServices from "../../Services/Auth.Services.js";

const localService = new AuthServices();

const localStrategy = new Strategy({ usernameField: "email", passwordField: "password" }, async (email, password, done) => {
    try {
        const getUser = await localService.getUser(email, password)
        done(null, getUser);
    } catch (error) {
        done(error, false)
    }
})

export default localStrategy