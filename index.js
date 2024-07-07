const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const itemsRoute = require("./routes/items");
const authRoute = require("./routes/auth");

app.use("/items", itemsRoute);
app.use("/", authRoute);

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/src/login.html");
});

app.get("/register", (request, response) => {
    response.sendFile(__dirname + "/src/register.html");
});

app.get("/list", (request, response) => {
    response.sendFile(__dirname + "/src/list.html");
});

app.use(express.static(path.join(__dirname, "src")));

app.all("*", (request, response) => {
    response.sendFile(__dirname + "/src/notFoundErr.html");
});

const port = 3000;
app.listen(port, () => {
    console.log("Server läuft auf localhost:3000");
});