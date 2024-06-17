import { Model, DataTypes } from "sequelize";

const PROVIDERS_TABLE = "providers";

class Providers extends Model {};

const initProvidersModel = (sequelize) => {
    Providers.init({
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
        modelName: "Providers",
        tableName: PROVIDERS_TABLE,
        timestamps: false,
    })
}

export {PROVIDERS_TABLE, Providers, initProvidersModel};

