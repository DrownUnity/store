const {faker} = require("@faker-js/faker");
const boom = require("@hapi/boom")

class ProductsServices {

  constructor(){
    this.products = [];
    this.generate();
  }

  async generate(){
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      })
    }
  }

  async create(data){
    const newProduct = {
      id: faker.string.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 3000)
    })
  }

  async findOne(id){
    const product = this.products.find(item => item.id === id);
    if(!product){
      throw boom.notFound("Product not found");
    }
    if(product.isBlock){
      throw boom.conflict("Product block")
    }
    return product;
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound("Product not found")
    }
    const updatedProduct = { ...this.products[index], ...changes };
    this.products[index] = updatedProduct;
    return updatedProduct;
}


  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1){
      throw boom.notFound("Product not found");
    }
    this.products.splice(index, 1);
    return "Product deleted";
  }
}

module.exports = ProductsServices;
