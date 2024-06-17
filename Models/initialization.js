import { initModel } from "./Products.Model.js";
import { initStoreModel } from "./Store.Model.js";
import db from "../Config/connection.js";

const initializeModels = () => {
    initModel(db);
    initStoreModel(db);
}

export default initializeModels