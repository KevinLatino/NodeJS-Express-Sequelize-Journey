import ProductRoutes from './Products.Routes.js'

const routerApi = (app) => {
    app.use('/products', ProductRoutes)
}

export default routerApi;