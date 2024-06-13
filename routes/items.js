const express = require("express");
const bodyParser = require("body-parser"); 
const router = express.Router(); // Do not change "R" to "r" (of "...Router...")

router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const itemsArray = [
];
let currentId = 1;

router.get("/", (request, response) => {
    response.json(itemsArray);
});

router.post("/", (request, response) => {
    const { itemName } = request.body;

    if(!itemName) {
        return response.status(400).send("Item name is required!");
    }

    const newItem = {
        id: currentId++,
        itemName: itemName
    };

    itemsArray.push(newItem);
    response.sendStatus(201).json(newItem);
});

module.exports = router;