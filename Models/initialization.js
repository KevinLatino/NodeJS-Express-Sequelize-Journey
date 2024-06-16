import { initModel } from "./Products.Model.js";
import { initStoreModel } from "./Store.Model.js";
import db from "../Config/connection.js";

export const initializeModels = () => {
    initModel(db);
    initStoreModel(db);

}