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
  return findRecipes;
};

const createRecipe = async (data, name, ingredients, preparation) => {
  const db = await connection();
  const addRecipe = await db.collection('recipes')
  .insertOne({ name, ingredients, preparation, userId: data.id });
  return { name, ingredients, preparation, userId: data.id, _id: addRecipe.insertedId };
};

const updateRecipe = async (id, recipe, data) => {
  const db = await connection();
  await db.collection('recipes')
  .updateOne({ _id: ObjectId(id) }, { $set: { ...recipe } });
  return {
    _id: id,
    ...recipe,
    userId: data,
  };
};

const excludeRecipe = async (id) => {
  const db = await connection();
  await db.collection('recipes')
  .deleteOne({ _id: ObjectId(id) });
};

const addImage = async (id, image) => {
  const db = await connection();
  await db.collection('recipes')
  .updateOne({ _id: ObjectId(id) }, { $set: { image } });
  const result = await getbyIdRecipes(id);
  return result;
};

module.exports = {
  getAllRecipes,
  getbyIdRecipes,
  createRecipe,
  updateRecipe,
  excludeRecipe,
  addImage,
};