// todo: req body raw or something else?

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price_per_serving: {
        type: Number,
        required: true,
    },
    minutes: {
        type: Number,
        required: true,
    },
    // nutritions: {
    //     type: [{ type: String, val: Number }],
    //     required: true,
    // },
    main_ingredients: {
        type: [String],
        required: true,
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
module.exports = Recipe = mongoose.model("Recipe", recipeSchema);
