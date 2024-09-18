const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the author's name."],
        },

        bio: {
            type: String,
            required: [true, "Please enter the author's bio."],
        },

        image: {
            type: String,
            required: [true, "Please enter the author's bio."],
        },

        messengerLink: {
            type: String,
            required: [true, "Please enter the author's Messenger link."],
        },

        workEmail: {
            type: String,
            required: [true, "Please enter the author's work email."],
        }
    },
    {
        timestamps: true,
    }
);

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;