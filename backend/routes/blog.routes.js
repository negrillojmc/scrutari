const express = require('express')
const Author = require('../models/author.model.js')
const router = express.Router();
const {getAllArticles, getSingleArticle, addNewArticle, updateSingleArticle, deleteSingleArticle} = require('../controllers/blog.controller.js')

// Get All Articles
router.get('/blog', getAllArticles);

// Get Single Article
router.get('/blog/:id', getSingleArticle)

// Add Single Article
router.post('/blog', addNewArticle)

// Update Single Article
router.put('/blog/:id', updateSingleArticle)

// Delete Single Article
router.delete('/blog/:id', deleteSingleArticle)

// ---AUTHOR MODIFICATION ROUTES---

// Get All Authors
router.get('/author', async (req, res) => {
    try {
        const authors = await Author.find({}).sort({ author: 1 })
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Add Single Author
router.post('/author', async (req, res) => {
    try {
        const author = await Author.create(req.body)
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


module.exports = router