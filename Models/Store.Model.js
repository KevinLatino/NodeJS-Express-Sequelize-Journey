import { Model, DataTypes } from "sequelize";
import { PROVIDERS_TABLE } from './Providers.Model.js'

const STORE_TABLE = "store";

class Store extends Model { };

const initStoreModel = (sequelize) => {
    Store.init({
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        providerId: {
            unique: false,
            field: "provider_id",
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: PROVIDERS_TABLE,
                key: "id"
            }
        }
        
    }, {
        sequelize,
        modelName: "Store",
        tableName: STORE_TABLE,
        timestamps: false
    })
}

export { STORE_TABLE, Store, initStoreModel };