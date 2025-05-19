const express = require('express');
const router = express.Router();
const { List } = require('../db/models/list.model');

router.get('/', async (req, res) => {
    try {
        const lists = await List.find();
        res.json(lists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;