import ProductRoutes from './Products.Routes.js'
import StoreRoutes from './Store.Routes.js'

const routerApi = (app) => {
    app.use('/products', ProductRoutes)
    app.use('/stores', StoreRoutes);
}

export default routerApi;