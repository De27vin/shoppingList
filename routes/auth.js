const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const usersArray = [
    {
        "username": "guest",
        "password": "guest"
    }
];

router.post("/register", async (request, response) => {
    const usernameExists = usersArray.find(user => user.username === request.body.username);
    if(usernameExists) {
        response.status(400).send("Username has already been used!");
    } else {
        try {
            const hashedPassword = await bcrypt.hash(request.body.password, 10);

            const user = { username: request.body.username, password: hashedPassword }
            usersArray.push(user);
            response.status(201).send("User registered successfully!");
        } catch {
            response.status(500).send("Internal server error");
        }
    }
});


router.post("/login", async (request, response) => {
    const user = usersArray.find(user => user.username === request.body.username);
    if(user == null) {
        return response.status(400).send("User doesn't exist!");
    }
    try {
        if(await bcrypt.compare(request.body.password, user.password)) {
            response.send("Success!");
        } else {
            response.send("Not allowed");
        }
    } catch {
        response.status(500).send("Internal server error");
    }
});



module.exports = router;