import { Store } from "./Store.Model.js";
import { Product } from "./Products.Model.js";

const initializeAssociations = () => {
    Product.belongsTo(Store, { as: "store", foreignKey: "id" });
}

export default initializeAssociations;