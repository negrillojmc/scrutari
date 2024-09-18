const express = require('express')
const router = express.Router();

// GET The Library page
router.get('/library', (req, res) => {
    res.json({message: 'GET library page'})
})

module.exports = router