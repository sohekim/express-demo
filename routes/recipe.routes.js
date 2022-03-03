const express =  require("express");
const router = express.Router();
const RecipeCtrl = require("../controllers/recipe.controller");

router.post("/", RecipeCtrl.apiCreateRecipe);
router.get("/", RecipeCtrl.apiGetAllRecipes);

module.exports =  router;