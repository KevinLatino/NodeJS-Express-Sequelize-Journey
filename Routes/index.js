import ProductRoutes from './Products.Routes.js'
import StoreRoutes from './Store.Routes.js'
import ProviderRoutes from './Provider.Routes.js'
import RewardRoutes from './Reward.Routes.js'
import UserRoutes from './User.Routes.js'
import AuthRoutes from './Auth.Routes.js';

const routerApi = (app) => {
    app.use('/products', ProductRoutes);
    app.use('/stores', StoreRoutes);
    app.use('/providers', ProviderRoutes);
    app.use('/rewards', RewardRoutes);
    app.use('/user', UserRoutes);
    app.use('/auth', AuthRoutes)
}

export default routerApi;