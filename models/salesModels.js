const { ObjectId } = require('mongodb');
const connection = require('./connections');

const getById = async (id) => {
  const db = await connection();
  const result = await db.collection('sales')
  .findOne(ObjectId(id));
  return result;
};

const getAll = async () => {
  const db = await connection();
  const result = await db.collection('sales')
  .find().toArray();
  return result;
};

async function create(sales) {
  const db = await connection();
  const addSales = await db.collection('sales')

  .insertOne({ itensSold: sales });
  return { _id: addSales.insertedId, itensSold: sales };
}

async function update(id, productId, quantity) {
  const db = await connection();
  await db.collection('sales')
  .updateOne({ _id: ObjectId(id) }, { $set: { productId, quantity } });
  return { id, productId, quantity };
}

module.exports = {
  getById,
  getAll,
  create,
  update,
};
