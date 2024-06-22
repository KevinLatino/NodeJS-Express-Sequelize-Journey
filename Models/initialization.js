import { initProductModel } from "./Products.Model.js";
import { initStoreModel } from "./Store.Model.js";
import { initProvidersModel } from "./Providers.Model.js";
import { initTaskModel } from "./Task.Models.js";
import { initRewardModel } from "./Reward.Model.js";
import { initRewardTaskModel } from "./Reward-Task.model.js";
import db from "../Config/connection.js";

const initializeModels = () => {
    initProductModel(db);

    initStoreModel(db);

    initProvidersModel(db);

    initRewardModel(db);

    initTaskModel(db);

    initRewardTaskModel(db);
}

export default initializeModels