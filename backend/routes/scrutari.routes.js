const express = require('express')
const Article = require('../models/article.model.js');
const router = express.Router();

// GET Welcome page
router.get('/', (req, res) => {
    res.json({mssg: 'GET welcome page'})
  })


// GET ALL Articles
router.get('/blog', async (req, res) => {
    try {
        const articles = await Article.find({}).sort('-publishedAt');
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// GET SINGLE Article
router.get('/blog/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id);
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// POST SINGLE Article
router.post('/blog', async (req, res) => {
    try {
        const article = await Article.create(req.body);
        res.sendStatus(200).json(article);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// PUT SINGLE Article
router.put('/blog/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const article = await Article.findByIdAndUpdate(id, req.body);
        if (!article) {
            return res.status(400).json({message: "Article not found"});
        }
        
        const updatedArticle = await Article.findById(id);
        res.status(200).json(updatedArticle);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// GET The Library page
router.get('/library', (req, res) => {
    res.json({message: 'GET library page'})
})

// GET Community Engagement page
router.get('/engagement', (req, res) => {
    res.json({message: 'GET engagement page'})
})


module.exports = router