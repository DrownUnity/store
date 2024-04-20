const express = require("express")

const router = express.Router();

const userServices = require("../services/userServices");
const service = new userServices();

// GET

router.get("/", async (req, res) => {
  const users = await service.find();
  res.json(users);
})

router.get("/:id", async (req, res) => {
  const {id} = req.params;
  const user = await service.findOne(id);
  res.json(user);
})

// POST

router.post("/", async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);
})

//Patch

router.patch("/:id", async (req,res) => {
  const {id} = req.params;
  const body = req.body;
  const user = await service.update(id, body);
  res.json(user);
})

// DELETE

router.delete("/:id", async (req,res) => {
  const {id} = req.params;
  const user = await service.delete(id)
  res.json(user)
})

module.exports = router;
