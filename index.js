const express = require("express");
const port = 3001;
const app = express();
const routes = require("./src/routes/routes");
app.use(express.json());
app.use(express.static("public"));
app.use("/", routes);

app.listen(port, () => {
    console.log(`Servidor online https://localhost:${port}`);
});
