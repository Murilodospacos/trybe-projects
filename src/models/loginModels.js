const connection = require('../connections/connections');

const usersLoginExists = async ({ email }) => {
  const db = await connection();
  const findUser = await db.collection('users').findOne({ email });
  return findUser;
};

module.exports = {
  usersLoginExists,
};