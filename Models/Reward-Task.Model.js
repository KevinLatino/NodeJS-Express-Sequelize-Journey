import { DataTypes, Model } from "sequelize"
import { REWARDS_TABLE } from './Reward.Model.js'
import { TASKS_TABLE } from './Task.Models.js'

const REWARD_TASK_MODEL = "reward_task"

class RewardProduct extends Model { }

const initRewardTaskModel = (sequelize) => {
    RewardProduct.init({
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        rewardId: {
            field: "reward_id",
            unique: false,
            type: DataTypes.INTEGER,
            references: {
                model: REWARDS_TABLE,
                key: "id"
            }
        },
        taskId: {
            field: "task_id",
            unique: false,
            type: DataTypes.INTEGER,
            references: {
                model: TASKS_TABLE,
                key: "id"
            }
        }

    }, {
        sequelize,
        modelName: "rewardTasks",
        tableName: REWARD_TASK_MODEL,
        timestamps: false
    })
}

export { REWARD_TASK_MODEL, RewardProduct, initRewardTaskModel };