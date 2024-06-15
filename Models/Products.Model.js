import { DataTypes, Model } from "sequelize";

const TABLE_NAME = "products"

class Product extends Model {
}

const initModel = (sequelize) => {
    Product.init({
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        timestamps: false,
        tableName: TABLE_NAME,
        modelName: "Product"
    })
}

export { initModel, Product };