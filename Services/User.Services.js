import { User } from "../Models/User.Model.js";
import bcrypt from 'bcrypt'

class UserService {

    async createUser(body) {
        const hashPassword = await bcrypt.hash(body.password, 10)
        const create = await User.create({
            ...body,
            password: hashPassword
        })
        delete create.dataValues.password
        return create
    }

    async findByEmail(email) {
        const findEmail = await User.findOne({
            where: { email }
        })
        return findEmail
    }
}

export default UserService