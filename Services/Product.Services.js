import { Product } from "../Models/Products.Model.js";

class ProductService {

    async findByPk(id) {
        const findAllProducts = await Product.findByPk(id);
        return findAllProducts;
    }
    async getAllproducts() {
        const getProducts = await Product.findAll({
            include: ["store"]
        });
        return getProducts;
    }

    async createProduct(body) {
        const createdProduct = await Product.create(body);
        return createdProduct;
    }

    async updateProduct(id, body) {
        const findId = await this.findByPk(id);
        const updateProduct = await findId.update(body);
        return updateProduct;
    }

}

export default ProductService;