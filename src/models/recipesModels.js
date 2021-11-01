const { ObjectId } = require('mongodb');
const connection = require('../connections/connections');

const getAllRecipes = async () => {
  const db = await connection();
  const result = await db.collection('recipes')
  .find().toArray();
  return result;
};

const getbyIdRecipes = async (id) => {
  const db = await connection();
  const findRecipes = await db.collection('recipes').findOne({ _id: ObjectId(id) });
  console.log(findRecipes);
  return findRecipes;
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
  getbyIdRecipes,
  createRecipe,
};