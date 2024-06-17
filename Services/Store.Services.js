import { Store } from "../Models/Store.Model.js";

class StoreServices {

    async findById (id) {
        const findId = await Store.findByPk(id);
        return findId;
    }
    async getStores() {
        const getStores = await Store.findAll()
        return getStores;
    }

    async createStore(body) {
        const newStore = await Store.create(body);
        return newStore
    }

    async updateStore(id, body){
        const findId = await this.findById(id);
        const update = await findId.update(body);
        return update;
    }

}

export default StoreServices;