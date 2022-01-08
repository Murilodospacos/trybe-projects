const { sales } = require('../../database/models');

const getAll = async () => {
  const resultData = await sales.findAll();
  console.log(resultData)
  const result = resultData.map((i) => i.dataValues);
  return result;
};

module.exports = {
  getAll,
};
