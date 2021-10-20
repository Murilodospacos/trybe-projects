const Sales = require('../models/salesModels');
const Products = require('../models/productsModels');

const getByIdSales = async (id) => {
  const data = await Sales.getById(id);
  return data;
};

const getAllSales = async () => {
  const data = await Sales.getAll();
  return data;
};

const createSales = async (sales) => {
  const products = await Products.getAll();
  sales.forEach((newSalesProducts) => {
    const searchResult = products.find(({ _id }) => _id.toString() === newSalesProducts.productId);
    if (!searchResult
      || newSalesProducts.quantity <= 0
      || typeof newSalesProducts.quantity !== 'number') {
        throw new Error('Produto não cadastrado');
    }
  });
  const data = await Sales.create(sales);
  return data;
};

const updateSales = async (id, productId, quantity) => {
  const data = await Sales.update(id, productId, quantity);
  return data;
};

module.exports = {
  getByIdSales,
  getAllSales,
  createSales,
  updateSales,
};
