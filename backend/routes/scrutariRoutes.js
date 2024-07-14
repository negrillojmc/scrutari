const express = require('express')

const router = express.Router()

// routes

// GET Welcome page
router.get('/', (req, res) => {
    res.json({mssg: 'GET welcome page'})
    
})

// GET Blog page
router.get('/blog', (req, res) => {
    res.json({mssg: 'GET blog page'})
})

// GET The Library page
router.get('/library', (req, res) => {
    res.json({mssg: 'GET library page'})
})

// GET Community Engagement page
router.get('/engagement', (req, res) => {
    res.json({mssg: 'GET engagement page'})
})




module.exports = router