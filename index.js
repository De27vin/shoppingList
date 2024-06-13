const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Server läuft auf localhost:3000");
});



app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

