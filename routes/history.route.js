const express = require('express');
const router = express.Router();
const { showHistory, clearSingleEntry, deleteAllEntry } = require('../controllers/history.controller.js')

router.get('/history', showHistory);
router.delete('/history/:id', clearSingleEntry);
router.delete('/history', deleteAllEntry);



module.exports = router;