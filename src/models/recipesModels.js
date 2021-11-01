const connection = require('../connections/connections');

const getAllRecipes = async () => {
  const db = await connection();
  const result = await db.collection('recipes')
  .find().toArray();
  return result;
};

const recipesExists = async (id) => {
  const db = await connection();
  const findRecipes = await db.collection('recipes').findOne({ id });
  return findRecipes !== null;
};

async function createRecipe(userData, name, ingredients, preparation) {
  const db = await connection();
  const addRecipe = await db.collection('recipes')
  .insertOne({ name, ingredients, preparation });
  const { _id } = userData;
  return { name, ingredients, preparation, userId: _id, _id: addRecipe.insertedId };
}

module.exports = {
  getAllRecipes,
  recipesExists,
  createRecipe,
};