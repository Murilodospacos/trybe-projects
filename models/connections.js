// const { MongoClient } = require('mongodb');

// const OPTIONS = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// };

// const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';

// let db = null;
// // mongodb://mongodb:27017/StoreManager

// const connection = () => (
//    db
//     ? Promise.resolve(db)
//     : MongoClient.connect(MONGO_DB_URL, OPTIONS)
//     .then((conn) => {
//     db = conn.db('StoreManager');
//     return db;
//     })
// );

// module.exports = connection;

const { MongoClient } = require('mongodb');

// const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';
const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';

const connection = () =>
MongoClient
.connect(MONGO_DB_URL, {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then((conn) => conn.db('StoreManager'))
.catch((err) => {
console.error(err);
process.exit(1);
});

module.exports = connection;
