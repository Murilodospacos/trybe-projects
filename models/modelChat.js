const connection = require('./connection');

const getAllMessages = () => connection()
.then((db) => db.collection('messages').find({}).toArray());

const saveMessage = (obj) => connection().then((db) => db.collection('messages').insertOne(obj));

module.exports = {
  getAllMessages,
  saveMessage,
};
