import { Model, DataTypes } from "sequelize";

const TASKS_TABLE = "tasks"

class Task extends Model {};

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
        }
    }, {
        sequelize,
        modelName: "Task",
        tableName: TASKS_TABLE,
        timestamps: false
    })
}

export {TASKS_TABLE, Task, initTaskModel};