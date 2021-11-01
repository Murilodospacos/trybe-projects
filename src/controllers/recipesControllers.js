const Recipes = require('../services/recipesServices');

const getAllRecipes = async (_req, res) => {
  try {
    const recipe = await Recipes.getAllRecipes();
    return res.status(200).json(recipe);
  } catch (error) {
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

const getbyIdRecipes = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const dataRecipes = await Recipes.getbyIdRecipes(id);

    if (!dataRecipes) {
      return res.status(404).json({ message: 'recipe not found' });
    }
    return res.status(200).json(dataRecipes);
  } catch (error) {
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

const createRecipes = async (req, res) => {
  try {
    const { name, ingredients, preparation } = req.body;
    const userData = req.user;
    const recipe = await Recipes.createRecipes(userData, name, ingredients, preparation);
    if (recipe.error && recipe.error === 'Recipe_Exists') {
      return res.status(409).json({
        message: 'Recipe already registered',
      });
    }
    return res.status(201).json({ recipe });
  } catch (error) {
    return res.status(500).json({ message: 'Erro no Servidor' });
  }
};

module.exports = {
  getbyIdRecipes,
  getAllRecipes,
  createRecipes,
};