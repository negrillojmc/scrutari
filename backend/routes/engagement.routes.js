const express = require('express')
const router = express.Router();

// GET Community Engagement page
router.get('/engagement', (req, res) => {
    res.json({message: 'GET engagement page'})
})

module.exports = router