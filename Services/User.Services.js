import { User } from "../Models/User.Model.js";
import bcrypt from 'bcrypt'

class UserServices {


    async createUSer(bodyUser) {
        const newPassword = await bcrypt.hash(bodyUser.password, 10);
        const newUSer = await User.create({
            ...bodyUser,
            password: newPassword
        })
        delete newUSer.dataValues.password;
        return newUSer;
    }

    async findEmail(email) {
        const findByEmail = await User.findOne({
            where: { email: email }
        })
        return findByEmail
    }

}

export default UserServices