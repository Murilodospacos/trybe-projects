const Products = require('../services/productsServices');

const getAllProducts = async (_req, res) => {
  try {
    const products = await Products.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Aconteceu erro ao buscar os dados' });
  }
};

const createProducts = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const data = await Products.createProducts({ name, quantity });
    // if (data.error_code && data.error_code === 'PRODUCTS_EXISTS') {
    //   return res.status(400).json({ message: 'Esse produto já está cadastrado' });
    // }
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Aconteceu erro ao cadastrar o som' });
  }
};

module.exports = { getAllProducts, createProducts };
