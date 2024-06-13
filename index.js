const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const itemsRoute = require("./routes/items");
const authRoute = require("./routes/auth");

app.use("/items", itemsRoute);
app.use("/auth", authRoute);

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/src/index.html");
});

app.use(express.static(path.join(__dirname, "routes")));

const port = 3000;
app.listen(port, () => {
    console.log("Server läuft auf localhost:3000");
});
