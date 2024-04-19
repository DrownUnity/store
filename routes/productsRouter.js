const express = require("express")

const router = express.Router();

const ProductServices = require("../services/productsServices");
const service = new ProductServices();

// GET

router.get("/", (req, res) => {
  const products = service.find();
  res.json(products)
})

router.get("/:id", (req, res) => {
  const {id} = req.params;
  const product = service.findOne(id);
  res.json(product);
})

// POST

router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "created",
    data: body,
  })
})

//Patch

router.patch("/:id", (req,res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: "created",
    data: body,
    id,
  })
})

// DELETE

router.delete("/:id", (req,res) => {
  const {id} = req.params;
  res.json({
    message: "delete",
    id
  })
})


module.exports = router;
