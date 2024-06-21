import { Model, DataTypes } from "sequelize";
import { REWARDS_TABLE } from "./Reward.Model.js";

const TASKS_TABLE = "tasks"

class Task extends Model { };

const initTaskModel = (sequelize) => {
    Task.init({
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
        rewardId: {
            unique: false,
            field: "reward_id",
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: REWARDS_TABLE,
                key: "id"
            }
        }
    }, {
        sequelize,
        modelName: "Task",
        tableName: TASKS_TABLE,
        timestamps: false
    })
}

export { TASKS_TABLE, Task, initTaskModel };