import passport from "passport";
import localStrategy from "./strategies/local.strategy.js";


const initStrategies = () => {
    passport.use(localStrategy)
}

export default initStrategies