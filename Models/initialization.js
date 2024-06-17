import { initProductModel } from "./Products.Model.js";
import { initStoreModel } from "./Store.Model.js";
import { initProvidersModel } from "./Providers.Model.js";
import db from "../Config/connection.js";

const initializeModels = () => {
    initProductModel(db);
    initStoreModel(db);
    initProvidersModel(db);
}

export default initializeModels