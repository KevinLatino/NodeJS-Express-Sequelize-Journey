import { initModel } from "./Products.Model.js";
import db from "../Config/sequelize.js";

export const initializeModels = () => {
    initModel(db);
}