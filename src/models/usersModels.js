const { ObjectId } = require('mongodb');
const connection = require('../connections/connections');

const getAllUsers = async () => {
  const db = await connection();
  const result = await db.collection('users')
  .find().toArray();
  return result;
};

const usersExists = async ({ email }) => {
  const db = await connection();
  const findUser = await db.collection('users').findOne({email});
  return findUser !== null;
}

async function create(name, email, password) {
  const db = await connection();
  const addUsers = await db.collection('users')
  .insertOne({ name, email, password, role: 'user'});
  return { name, email, role: 'user', _id: addUsers.insertedId,  };
}

module.exports = {
  usersExists,
  getAllUsers,
  create
}