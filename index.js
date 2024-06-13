const express = require("express");
const app = express();
const port = 3000;

const itemsRoute = require("./routes/items");
app.use("/items", itemsRoute);

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.listen({port}, () => {
    console.log("Server läuft auf localhost:3000");
});

