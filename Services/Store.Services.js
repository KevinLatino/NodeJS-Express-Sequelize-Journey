import { Store } from "../Models/Store.Model.js";

class StoreServices {
    constructor() { }

    async getStores() {
        const getStores = await Store.findAll()
        return getStores;
    }

    async createStore(body) {
        const newStore = await Store.create(body);
        return newStore
    }
}

export default StoreServices;