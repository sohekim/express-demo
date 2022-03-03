const Recipe = require("../models/Recipe");

module.exports = class RecipeService {

    static async createRecipe(data){
        try {
            let mainIngredients = data.main_ingredients.toString().split(",");



            // todo: verify if the split main ingredient is actually a main ingredient
            // todo: maybe a ENUM
            const newRecipe = {
                name: data.name,
                description: data.description,
                price_per_serving: data.price_per_serving,
                minutes: data.minutes,
                nutritions: nutritions,
                main_ingredients: mainIngredients,
            }
            const response = await new Recipe(newRecipe).save();
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    static async getAllRecipes(){
        try {
            const allRecipes = await Recipe.find();
            return allRecipes;
        } catch (error) {
            console.log(`Could not fetch recipes ${error}`)
        }
    }

    static async getAllRecipesFilter(obj) {

        // {}
        // { main_ingredients: 'potato' }
        // { main_ingredients: 'potato', price: '1' }
        // { main_ingredients: 'potato,milk', price: '1' }

        try {
            // let filter = {};
            //
            // for (let property in obj) {
            //     console.log(`${property}: ${obj[property]}`);
            // }
            // todo: for array, split the string & find

            const allRecipes = await Recipe.find(obj);
            return allRecipes;
        } catch (error) {
            console.log(`Could not fetch recipes ${error}`)
        }
    }



}