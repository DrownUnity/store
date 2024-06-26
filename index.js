const express = require("express")
const routerApi = require("./routes")
const app = express();
const port = 3000;

const {logErrors, errorHandler, boomErrorHandler} = require("./middlewares/errorHandler");

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler)
app.use(errorHandler);

app.listen(port)

