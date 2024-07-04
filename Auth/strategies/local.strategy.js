import { Strategy } from "passport-local";
import AuthServices from "../../Services/Auth.Services.js";

const localServices = new AuthServices();

const localStrategy = new Strategy({usernameField: email, passwordField: password}, async (email, password, done) => {
    try {
        
    } catch (error) {
        done(error, false)
    }
})

export default localStrategy