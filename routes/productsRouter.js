const express = require("express")

const ProductServices = require("../services/productsServices");
const {createProductSchema, updateProductSchema, getProductSchema} = require("../schemas/productSchema")
const validatorHandler = require("../middlewares/validationHandler")

const router = express.Router();
const service = new ProductServices();

// GET

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products)
})

router.get("/:id",
  validatorHandler(getProductSchema, "params"),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
})

// POST

router.post("/",
  validatorHandler(createProductSchema, "body"),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
})

//Patch

router.patch("/:id", async (req,res, next) => {
  try {
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json(product);

  } catch (error) {
    next(error)
  }
})

// DELETE

router.delete("/:id", async(req,res) => {
  const {id} = req.params;
  const product =  await service.delete(id)
  res.json(product)
})


module.exports = router;
