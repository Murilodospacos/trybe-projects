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

const createRecipes = async (data, name, ingredients, preparation) => {
  const dataCreate = await Recipes.createRecipe(data, name, ingredients, preparation);
  return dataCreate;
};

const updateRecipe = async (id, recipe, data) => {
  const update = await Recipes.updateRecipe(id, recipe, data);
  return update;
};

const excludeRecipe = async (id) => {
  const exclude = await Recipes.excludeRecipe(id);
  return exclude;
};

const addImage = async (id, data) => {
  const userId = data.id;
  const { role } = data;
  const recipeImage = await Recipes.getbyIdRecipes(id);
  const imgURL = `localhost:3000/src/uploads/${id}.jpeg`;
  if (recipeImage.userId === userId || role === 'admin') {
    const updateImg = await Recipes.addImage(id, imgURL);
    return updateImg;
  }
};

module.exports = {
  updateRecipe,
  getbyIdRecipes,
  createRecipes,
  getAllRecipes,
  excludeRecipe,
  addImage,
};