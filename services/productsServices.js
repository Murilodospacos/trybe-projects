const Products = require('../models/productsModels');

const getByIdProducts = async (id) => {
  const data = await Products.getById(id);
  return data;
};

const getAllProducts = async () => {
  const data = await Products.getAll();
  return data;
};

const createProducts = async ({ name, quantity }) => {
  const productsExists = await Products.create({ name, quantity });
  if (!productsExists) {
    return false;
  }
  return productsExists;
};

module.exports = { getAllProducts, createProducts, getByIdProducts };
