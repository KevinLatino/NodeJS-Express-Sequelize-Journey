import { Model, DataTypes } from "sequelize";

const STORE_TABLE = "store";

class Store extends Model {};

const initStoreModel = (sequelize) => {
    Store.init({
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: "Store",
        tableName: STORE_TABLE,
        timestamps: false
    })
}

export {STORE_TABLE, Store, initStoreModel};