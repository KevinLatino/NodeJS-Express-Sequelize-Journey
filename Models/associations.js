import { Store } from "./Store.Model.js";
import { Product } from "./Products.Model.js";

const initAssociations = () => {
    Product.belongsTo(Store, { as: "store", foreignKey: "id" });
}

export default initAssociations;