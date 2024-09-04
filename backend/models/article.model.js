const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter article title."],
        },

        author: {
            type: String,
            required: [true, "Please enter article author."],
        },

        content: {
            type: String,
            required: [true, "Please enter article content."],
        },

        publishedAt: {
            type: Date,
            default: null,
        },

        featuredImage: {
            type: String,
            default: null,
        },

        category: {
            type: String,
            required: [true, "Please enter article category: Introduction, Literature, Methodology, or Analysis."],
        }
    },
    {
        timestamps: true,
    }
);

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;