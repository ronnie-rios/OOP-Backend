const express = require('express');
const router = express.Router;
const Driver = require('../Classes/Driver');

const data = require('../data/data');
let drivers = data.teams;

router.get('/', (req, res) => {
    if (drivers.length > 0) {
        res.status(200).json(drivers)
    } else {
        res.status(400).json({
            message: 'not found'
        })
    };
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const driver = drivers.find(driver => driver.id == id);
    res.status(200).json(driver);
});

module.exports = router;