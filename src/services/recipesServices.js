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
  return data;
};

const createRecipes = async (userData, name, ingredients, preparation) => {
  const data = await Recipes.createRecipe(userData, name, ingredients, preparation);
  return data;
};

const updateRecipe = async (id, recipe, data) => {
  const update = await Recipes.updateRecipe(id, recipe, data);
  return update;
};

const excludeRecipe = async (id) => {
  const exclude = await Recipes.excludeRecipe(id);
  return exclude;
};

module.exports = {
  updateRecipe,
  getbyIdRecipes,
  createRecipes,
  getAllRecipes,
  excludeRecipe,
};