const Products = require('../services/productsServices');

const getByIdProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Products.getByIdProducts(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Aconteceu erro ao buscar os dados' });
  }
};

const getAllProducts = async (_req, res) => {
  try {
    const products = await Products.getAllProducts();
    return res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Aconteceu erro ao buscar os dados' });
  }
};

const createProducts = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const data = await Products.createProducts({ name, quantity });
    // if (data.error_code && data.error_code === 'PRODUCTS_EXISTS') {
    //   return res.status(400).json({ message: 'Esse produto já está cadastrado' });
    // }
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Aconteceu erro ao cadastrar o som' });
  }
};

module.exports = { getAllProducts, createProducts, getByIdProducts };
