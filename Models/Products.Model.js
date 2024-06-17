import { DataTypes, Model } from "sequelize";
import { Store, STORE_TABLE } from './Store.Model.js'

const TABLE_NAME = "products"

class Product extends Model { }

const initProductModel = (sequelize) => {
    Product.init({
        id: {
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        storeId: {
            field: "store_id",
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
            references: {
                model: STORE_TABLE,
                key: "id",
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL"
        }
    }, {
        sequelize,
        timestamps: false,
        tableName: TABLE_NAME,
        modelName: "Product"
    })
}

export { initProductModel, Product };