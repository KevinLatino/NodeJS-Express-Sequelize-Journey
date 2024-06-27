import ProductRoutes from './Products.Routes.js'
import StoreRoutes from './Store.Routes.js'
import ProviderRoutes from './Provider.Routes.js'
import RewardRoutes from './Reward.Routes.js'

const routerApi = (app) => {
    app.use('/products', ProductRoutes);
    app.use('/stores', StoreRoutes);
    app.use('/providers', ProviderRoutes);
    app.use('/rewards', RewardRoutes);
}

export default routerApi;