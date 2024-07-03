import { Model, DataTypes } from "sequelize";
import { TABLE_NAME } from "./User.Model.js";

const REWARDS_TABLE = "rewards"

class Rewards extends Model {};

const initRewardModel = (sequelize) => {
    Rewards.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            unique: false,
            field: "user_id",
            type: DataTypes.UUID,
            references: {
                model: TABLE_NAME,
                key: "id"
            }
        }
    }, {
        sequelize,
        modelName: "Rewards",
        tableName: REWARDS_TABLE,
        timestamps: false
    })
}

export {REWARDS_TABLE, Rewards, initRewardModel};