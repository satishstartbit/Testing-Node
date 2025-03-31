// routes/userRoutes.js
const express = require('express');
const { registerTransportCompany, getTransportCompanyById,
     getAllTransportCompany, deleteTransportCompanyById } = require('../controllers/company');
const router = express.Router();
// GET route to fetch all users

router.post('/create', registerTransportCompany);
router.get('/:id', getTransportCompanyById);
router.get('/delete/:id', deleteTransportCompanyById);
router.get('/', getAllTransportCompany);
module.exports = router;
