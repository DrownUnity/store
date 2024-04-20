const {faker} = require("@faker-js/faker");

class UserServices {

  constructor(){
    this.user = [];
    this.generate();
  }

  async generate(){
    const limit = 50;
    for (let index = 0; index < limit; index++) {
      this.user.push({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        lastName: faker.person.lastName(),
        gender: faker.person.gender(),
      })
    }
  }

  async create(data){
    const newUser = {
      id: faker.string.uuid(),
      ...data,
    }
    this.user.push(newUser);
  }

  async find(){
    return this.user;
  }

  async findOne(id){
    const user = this.user.find(item => item.id === id);
    if(!user){
      throw new Error("User not found");
    }
    return user;
  }

  async update(id, changes){
    const index = this.user.findIndex(item => item.id === id);
    if(index === -1){
        throw new Error("Product not found");
    }
    const updatedUser = { ...this.user[index], ...changes };
    this.user[index] = updatedProduct;
    return updatedUser;
  }

  async delete(){
    const index = this.user.findIndex(item => item.id === id);
    if(index === -1){
      throw new Error("User not found");
    }
    this.user.splice(index, 1);
    return "User deleted";
  }

}

module.exports = UserServices;
