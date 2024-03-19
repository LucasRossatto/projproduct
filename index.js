const express = require("express");
const router = require("./src/routers/router");
const port = 3001;
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/", router);

app.listen(port, () => {
    console.log("Servidor online https://localhost:${port}");
});
