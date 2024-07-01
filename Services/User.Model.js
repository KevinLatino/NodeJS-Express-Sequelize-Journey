import { User } from '../Models/User.Model.js'
import bcrypt from 'bcrypt'

class UserServices {

    async createUser(body) {

        const existingUser = await User.findOne({ where: { email: body.email } });
        if (existingUser) {
            throw new Error('El correo electrónico ya está en uso.');
        }

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
            where: { email: email }
        })
        return findEmail;
    }
}

export default UserServices

