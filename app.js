const express = require("express")
const routerApi = require("./routes")
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola mundo")
})

app.use(express.json());

routerApi(app);

app.listen(port)
