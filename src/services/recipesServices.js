const Recipes = require('../models/recipesModels');

const getAllRecipes = async () => {
  const data = await Recipes.getAllRecipes();
  return data;
};

const createRecipes = async (userData, name, ingredients, preparation) => {
  const usersExists = await Recipes.recipesExists({ name });
  if (usersExists) return { error: 'Email_Exists' };
  const data = await Recipes.createRecipe(userData, name, ingredients, preparation);
  return data;
};

module.exports = {
  createRecipes,
  getAllRecipes,
};