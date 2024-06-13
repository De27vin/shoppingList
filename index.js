const express = require("express");
const app = express();

app.use(express.json());

const itemsRoute = require("./routes/items");
app.use("/items", itemsRoute);

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

const port = 3000;
app.listen({port}, () => {
    console.log("Server läuft auf localhost:3000");
});

