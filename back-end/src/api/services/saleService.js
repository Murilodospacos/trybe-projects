const _ = require('lodash');

const { sales, products } = require('../../database/models');

const changeKeysCase = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((k) => {
    newObj[_.camelCase(k)] = obj[k];
  });
  return newObj;
};

const getAll = async () => {
  const resultData = await sales.findAll();
  console.log(resultData);
  const result = resultData.map((i) => (i.dataValues)).map((i) => changeKeysCase(i));
  return result;
};

const getByUserId = async (id) => {
  const resultData = await sales.findAll({ where: { user_id: id } });
  console.log(resultData);
  const result = resultData.map((i) => (i.dataValues)).map((i) => changeKeysCase(i));
  return result;
};

const getByOrderId = async (id) => {
  const result = await sales.findOne({
    where: { id },
    include: [{ model: products, as: 'products' }],
  });
  return result;
};

// const newOrder = async (body) => {
//   const { user_id, seller_id, total_price, delivery_address, delivery_number, { carrinho } } = body;
//   const status = 'Pendente';
//     // user_id: DataTypes.INTEGER,
//   // seller_id: DataTypes.INTEGER,
//   // total_price: DataTypes.DECIMAL(10,2),
//   // delivery_address: DataTypes.STRING,
//   // delivery_number: DataTypes.INTEGER,
//   // sale_date: DataTypes.DATEONLY,
//   // status: DataTypes.STRING,
// };


module.exports = {
  getAll,
  getByUserId,
  getByOrderId,
  // newOrder,
};
