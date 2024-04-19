const express = require("express")

const productRouter = require("./productsRouter");
const userRouter = require("./usersRouter")
const categoriesRouter = require("./categoriesRouters");

let routerApi = (app) => {
  const router = express.Router();
  app.use("/api/V1", router)
    router.use("/products", productRouter);
    router.use("/users", userRouter);
    router.use("/categories", categoriesRouter);
}

module.exports = routerApi;
