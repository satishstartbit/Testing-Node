const express = require('express');
const {  getAllUsers } = require('../../controllers/webportal/user/CreateUsers');


const router = express.Router();



// GET route to fetch all users
router.get('/', getAllUsers);

module.exports = router;
