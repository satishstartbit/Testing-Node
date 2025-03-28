// routes/exampleRoute.js
const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Define a route for getting the example data
router.get('/example', exampleController.getExample);

module.exports = router;
