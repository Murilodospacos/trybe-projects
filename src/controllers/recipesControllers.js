const Recipes = require('../services/recipesServices');

const errorServer = 'Erro no Servidor';

const getAllRecipes = async (_req, res) => {
  try {
    const recipe = await Recipes.getAllRecipes();
    return res.status(200).json(recipe);
  } catch (error) {
    return res.status(500).json({ message: errorServer });
  }
};

const getbyIdRecipes = async (req, res) => {
  try {
    const { id } = req.params;
    const dataRecipes = await Recipes.getbyIdRecipes(id);

    if (!dataRecipes) {
      return res.status(404).json({ message: 'recipe not found' });
    }
    return res.status(200).json(dataRecipes);
  } catch (error) {
    return res.status(500).json({ message: errorServer });
  }
};

const createRecipes = async (req, res) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const { data } = req.user;
    const recipe = await Recipes.createRecipes(data, name, ingredients, preparation);
    if (recipe.error && recipe.error === 'Recipe_Exists') {
      return res.status(409).json({
        message: 'Recipe already registered',
      });
    }
    return res.status(201).json({ recipe });
  } catch (error) {
    return res.status(500).json({ message: errorServer });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.user;
    const { name, ingredients, preparation } = req.body;
    const result = await Recipes.updateRecipe(id, { name, ingredients, preparation }, data.id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: errorServer });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Recipes.excludeRecipe(id);
    return res.status(204).json(result);
  } catch (error) {
    return res.status(500).json({ message: errorServer });
  }
};

const addImage = async (req, res) => {
  const { id } = req.params;
  const { data } = req.user;
  const result = await Recipes.addImage(id, data);
  return res.status(200).json(result);
};

module.exports = {
  getbyIdRecipes,
  getAllRecipes,
  createRecipes,
  updateRecipe,
  deleteRecipe,
  addImage,
};