const _ = require('lodash')
const { sales } = require('../../database/models');;

const changeKeysCase = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((k) => (newObj[_.camelCase(k)] = obj[k]));
  return newObj;
};

const getAll = async () => {
  const resultData = await sales.findAll();
  console.log(resultData);
  const result = resultData.map((i) => (i.dataValues)).map((i) => changeKeysCase(i));
  return result;
};
// 

module.exports = {
  getAll,
};
