import localStrategy from "./strategies/local.strategies.js"
import passport from "passport"

const initStrategies = () => {
    passport.use(localStrategy);
}

export default initStrategies