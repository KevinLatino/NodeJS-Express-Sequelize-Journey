import { Product } from "../Models/Products.Model.js";

class ProductService {
    constructor() { }

    async getAllproducts() {
        const getProducts = await Product.findAll();
        return getProducts;
    }

    async createProduct(body) {
        const createdProduct = await Product.create(body);
        return createdProduct;
    }

}

export default ProductService;