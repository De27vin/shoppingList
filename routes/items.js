const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const pool = require("../database");

router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", async (request, response) => {
    try {
        const conn = await pool.getConnection();
        const [rows] = await conn.query("SELECT * FROM list_entry");
        response.json(rows);
        conn.release();
    } catch (error) {
        response.status(500).send("Internal server error");
    }
});

router.post("/", async (request, response) => {
    const { itemName, userID } = request.body;

    if (!itemName || !userID) {
        return response.status(400).send("Item name and user ID are required!");
    }

    try {
        const conn = await pool.getConnection();
        const result = await conn.query("INSERT INTO list_entry (item, userIDFK) VALUES (?, ?)", [itemName, userID]);
        const newItem = {
            id: result.insertId,
            itemName,
            userID
        };
        response.status(201).json(newItem);
        conn.release();
    } catch (error) {
        response.status(500).send("Internal server error");
    }
});

module.exports = router;
