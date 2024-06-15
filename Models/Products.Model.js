import { DataTypes, Model } from "sequelize";

const TABLE_NAME = "products"

class Product extends Model {
    id 
    name 
}

const initModel = (sequelize) => {
    Product.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        timestamps: false,
        tableName: TABLE_NAME,
    })
}

export { initModel, Product };