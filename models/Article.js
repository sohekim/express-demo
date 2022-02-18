const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    article_image: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now(),
    }
});

// Compile model from schema
// The first argument is the singular name of the collection that will be created for your model
// (Mongoose will create the database collection for the above model SomeModel above),
// and the second argument is the schema you want to use in creating the model.
module.exports = Article = mongoose.model("Article", articleSchema);
