import { DataTypes, Model } from "sequelize";

const USER_TABLE = "user"

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
            type: DataTypes.STRING,
            unique: true,
        }
    }, {
        sequelize,
        modelName: "User",
        tableName: USER_TABLE,
        timestamps: false
    })
}

export {USER_TABLE, User, initUserModel};