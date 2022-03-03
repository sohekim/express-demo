const RecipeService = require("../services/RecipeService");

// question : why Recipe and not RecipeController
module.exports = class Recipe {

    static async apiCreateRecipe(req, res, next){
        try {
            const createdRecipe =  await RecipeService.createRecipe(req.body);
            res.json(createdRecipe);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }

    static async apiGetAllRecipes(req, res, next){
        try {
            let recipes;
            if (Object.keys(req.query).length === 0) {
                recipes = await RecipeService.getAllRecipes();
            } else {
                recipes = await RecipeService.getAllRecipesFilter(req.query);
            }

            if(!recipes){
                res.status(404).json("There is no recipes found!")
            }
            res.json(recipes);
        } catch (error) {
            res.status(500).json({error: error})
        }
    }

}