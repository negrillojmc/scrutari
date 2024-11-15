const Article = require('../models/article.model');
const Author = require('../models/author.model')

// --- BLOG CONTROLLERS ---

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

// --- AUTHOR CONTROLLERS ---

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find({}).sort('name');
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getSingleAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findById(id);
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const addNewAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body);
        res.sendStatus(200).json(author);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateSingleAuthor = async (req, res) => {
    try {
        const {id} = req.params;
        const author = await Author.findByIdAndUpdate(id, req.body);
        if (!author) {
            return res.status(400).json({message: "Article not found"});
        }
        
        const updatedAuthor = await Author.findById(id);
        res.status(200).json(updatedAuthor);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteSingleAuthor =  async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Author.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: 'Author not found.'})
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
    deleteSingleArticle,
    getAllAuthors,
    getSingleAuthor,
    addNewAuthor,
    updateSingleAuthor,
    deleteSingleAuthor
}