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

        preview: {
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

        featuredVideo: {
            type: String,
            default: null,
        },

        category: {
            type: String,
            required: [true, "Please enter article category: Introduction, Literature, Methodology, or Analysis."],
        },

        sections: {
            type: 
                [
                    {
                        sectionTitle: String,
                        passages: [String],
                        examples: [String],
                        dynamic: Boolean, // Indicate if the content is dynamic
                        link: String,
                    }
                ],
        },
        
        authorID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author",
            required: [true, "Please enter the author's ID."],
        },

    },
    {
        timestamps: true,
    }
);

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;