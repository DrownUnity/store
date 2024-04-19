const express = require("express")
const {faker} = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.person.fullName(),
    })
  }
  res.json(products)
})

router.get("/id", (req, res) => {

})

module.exports = router;
