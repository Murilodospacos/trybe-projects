const Sales = require('../models/salesModels');
const Products = require('../models/productsModels');

const getByIdSales = async (id) => {
  const data = await Sales.getById(id);
  if (!data) throw new Error('Produto não cadastrado');
  return data;
};

const getAllSales = async () => {
  const data = await Sales.getAll();
  return data;
};

const createSales = async (sales) => {
  const products = await Products.getAll();
  sales.forEach(async ({ productId, quantity }) => {
    await Products.updateProductSale(productId, quantity);
    const searchResult = products.find(({ _id }) => _id.toString() === productId);
    if (!searchResult
      || quantity < 0
      || typeof quantity !== 'number') {
        throw new Error('Produto não cadastrado');
    }
  });
  const data = await Sales.create(sales);
  return data;
};

const updateSales = async (id, sales) => {
  const data = await Sales.update(id, sales);
  return data;
};

const deleteSales = async (id) => {
  const salesID = await Sales.getById(id);

  if (!salesID) throw new Error('Produto não cadastrado');

  await Sales.exclude(id);

  const { itensSold } = salesID;
  itensSold.forEach(async ({ productId, quantity }) => {
    await Products.updateDeleteSale(productId, quantity);
  });
};

module.exports = {
  getByIdSales,
  getAllSales,
  createSales,
  updateSales,
  deleteSales,
};
