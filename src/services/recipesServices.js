const Recipes = require('../models/recipesModels');

const getAllRecipes = async () => {
  const data = await Recipes.getAllRecipes();
  return data;
};

const getbyIdRecipes = async (id) => {
  const data = await Recipes.getbyIdRecipes(id);
  if (!data) {
    return null;
  }
  console.log(data);
  return data;
};

const createRecipes = async (userData, name, ingredients, preparation) => {
  const data = await Recipes.createRecipe(userData, name, ingredients, preparation);
  return data;
};

module.exports = {
  getbyIdRecipes,
  createRecipes,
  getAllRecipes,
};