const express = require("express");
const router = express.Router();

const username1 = "admin"; 
const password1 = "password";

router.post("/", (request, response) => {
    const { username, password } = request.body;

    if (username === username1 && password === password1) {
        response.status(200).json({ token: "auth-token" });
    } else {
        response.status(401).send("Invalid username or password.");
    }
});

module.exports = router;
