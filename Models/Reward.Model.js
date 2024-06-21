import { Model, DataTypes } from "sequelize";

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
        }
    }, {
        sequelize,
        modelName: "Rewards",
        tableName: REWARDS_TABLE,
        timestamps: false
    })
}

export {REWARDS_TABLE, Rewards, initRewardModel};