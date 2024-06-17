import { Providers } from "../Models/Providers.Model.js";

class ProviderServices {

    async getAllProviders() {
        const findList = await Providers.findAll();
        return findList;
    }

    async createProvider(body) {
        const createProvider = await Providers.create(body);
        return createProvider;
    }
}

export default ProviderServices;