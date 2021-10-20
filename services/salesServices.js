const Sales = require('../models/salesModels');
const Products = require('../models/productsModels');

const getAllSales = async () => {
  const data = await Sales.getAll();
  return data;
};

const createSales = async (sales) => {
  const products = await Products.getAll();
  // let error = false;
  sales.forEach((newSalesProducts) => {
    const searchResult = products.find(({ _id }) => _id.toString() === newSalesProducts.productId);
    if (!searchResult
      || newSalesProducts.quantity <= 0
      || typeof newSalesProducts.quantity !== 'number') {
        throw new Error('Produto não cadastrado');
    }
  });
  // if (error) {
  //   throw new Error('Produto não cadastrado');
  // }
  // const resultProductId = products[products.length - 1]._id;
  const data = await Sales.create(sales);
  return data;
};

module.exports = {
  getAllSales,
  createSales,
};
