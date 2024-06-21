import { initProductModel } from "./Products.Model.js";
import { initStoreModel } from "./Store.Model.js";
import { initProvidersModel } from "./Providers.Model.js";
import { initTaskModel } from "./Task.Models.js";
import { initRewardModel } from "./Reward.Model.js";
import db from "../Config/connection.js";

const initializeModels = () => {
    initProductModel(db);
    initStoreModel(db);
    initProvidersModel(db);
    initTaskModel(db);
    initRewardModel(db);
}

export default initializeModels