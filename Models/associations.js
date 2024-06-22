import { Store } from "./Store.Model.js";
import { Product } from "./Products.Model.js";
import { Providers } from "./Providers.Model.js";
import { Rewards } from "./Reward.Model.js";
import { Task } from "./Task.Models.js";
import { RewardProduct } from "./Reward-Task.model.js";

const initializeAssociations = () => {

    //A product must have a Store, and a Store must have a product
    Product.belongsTo(Store, { as: "store" })

    //A provider can have many stores, but a store just can have a provider
    Providers.hasMany(Store, { as: "store", foreignKey: "providerId" })
    Store.belongsTo(Providers, { as: "provider" })

    //A Reward can have many tasks and a task can have many rewards
    Rewards.belongsToMany(Task, {as: "task", through: RewardProduct, foreignKey: "rewardId"});
    Task.belongsToMany(Rewards, {as: "reward", through: RewardProduct, foreignKey: "taskId"});

}

export default initializeAssociations;