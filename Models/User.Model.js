import { DataTypes, Model, Sequelize } from "sequelize";

const TABLE_NAME = 'users'

class User extends Model { }

const initUserModel = (sequelize) => {
    User.init({
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
    }, {
        sequelize,
        modelName: "User",
        tableName: TABLE_NAME,
        timestamps: false
    })
}

export { TABLE_NAME, User, initUserModel }
