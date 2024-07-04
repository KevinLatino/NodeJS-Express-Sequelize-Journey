import UserServices from "../Services/User.Model.js";
import bcrypt from 'bcrypt'
import boom from "@hapi/boom";

const userServices = new UserServices()

class AuthServices {

    async getUser(email, password) {
        const user = await userServices.findByEmail(email);
        if (!user) {
            throw boom.unauthorized()
        }
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) {
            throw boom.unauthorized()
        }
        delete user.dataValues.password
        return user
    }
}

export default AuthServices