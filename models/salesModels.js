const connection = require('./connections');

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

module.exports = {
  getAll,
  create,
};
