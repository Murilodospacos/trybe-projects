const { ObjectId } = require('mongodb');
const connection = require('./connections');

const getById = async (id) => {
  const db = await connection();
  const result = await db.collection('products')
  .findOne(ObjectId(id));
  const { _id, name, quantity } = await result;
  return { _id, name, quantity };
};

const getAll = async () => {
  const db = await connection();
  const result = await db.collection('products')
  .find().toArray();
  return result;
};

async function create({ name, quantity }) {
  const db = await connection();
  const addProduct = await db.collection('products')
  .insertOne({ name, quantity });
  return { _id: addProduct.insertedId, name, quantity };
}

async function update(id, name, quantity) {
  const db = await connection();
  await db.collection('products')
  .updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } });
  return { id, name, quantity };
}

module.exports = { getAll, create, getById, update };
