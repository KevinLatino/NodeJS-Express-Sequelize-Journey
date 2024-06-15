import { initModel } from "./Products.Model.js";
import db from "../Config/connection.js";

export const initializeModels = () => {
    initModel(db);
}