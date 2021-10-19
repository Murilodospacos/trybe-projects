const connection = require('./connections');

// const productsExists = async ({ name }) => {
//   const db = await connection();
//   const products = await db.collection('products').findOne({ name });

//   return products !== null;
// };

const getAll = async () => {
  const db = await connection();
  const result = await db.collection('products').find().toArray();
  return result;
};

async function create({ name, quantity }) {
  const db = await connection();
  const addProduct = await db.collection('products').insertOne({ name, quantity });
  return { _id: addProduct.insertedId, name, quantity };
}

module.exports = { getAll, create };
