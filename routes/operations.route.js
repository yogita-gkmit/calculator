const express = require('express');
const router = express.Router();
const { calculate } = require('../controllers/operations.controller.js')

router.post('/operations', calculate);



module.exports = router;