const express = require("express")

const productRouter = require("./productsRouter");
const userRouter = require("./usersRouter")

let routerApi = (app) => {
  const router = express.Router();
  app.use("/api/V1", router)
    router.use("/products", productRouter);
    router.use("/users", userRouter);
}

module.exports = routerApi;
