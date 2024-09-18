const Article = require('../models/article.model');

const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.find({}).sort('-publishedAt');
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getSingleArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id);
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const addNewArticle = async (req, res) => {
    try {
        const article = await Article.create(req.body);
        res.sendStatus(200).json(article);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateSingleArticle = async (req, res) => {
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
}

const deleteSingleArticle =  async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Article.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'Article not found.'})
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllArticles,
    getSingleArticle,
    addNewArticle,
    updateSingleArticle,
    deleteSingleArticle
}