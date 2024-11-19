const express = require('express')
const Article = require('../models/article.model.js')
const Author = require('../models/author.model.js')
const router = express.Router();
const {getAllArticles, getSingleArticle, getAllIntroductionArticles, getAllLiteratureArticles, getAllMethodologyArticles, getAllAnalysisArticles, addNewArticle, updateSingleArticle, deleteSingleArticle, getAllAuthors, getSingleAuthor, addNewAuthor, updateSingleAuthor, deleteSingleAuthor} = require('../controllers/blog.controller.js')

// --- BLOG MODIFICATION ROUTES ---

// GET All Latest Articles
router.get('/blog', getAllArticles);

// GET All Introduction Articles
router.get('/blog/introduction', getAllIntroductionArticles);

// GET All Literature Articles
router.get('/blog/literature', getAllLiteratureArticles);

// GET All Methodology Articles
router.get('/blog/methodology', getAllMethodologyArticles);

// GET All Analysis Articles
router.get('/blog/analysis', getAllAnalysisArticles);

// GET Single Article
router.get('/blog/:id', getSingleArticle)

// ADD Single Article
router.post('/blog', addNewArticle)

// UPDATE Single Article
router.put('/blog/:id', updateSingleArticle)

// DELETE Single Article
router.delete('/blog/:id', deleteSingleArticle)


// ---AUTHOR MODIFICATION ROUTES---

// GET All Authors
router.get('/author', getAllAuthors);

// GET Single Author
router.get('/author/:id', getSingleAuthor)

// ADD Single Author
router.post('/author', addNewAuthor)

// UPDATE Single Article
router.put('/author/:id', updateSingleAuthor)

// DELETE Single Article
router.delete('/author/:id', deleteSingleAuthor)

module.exports = router