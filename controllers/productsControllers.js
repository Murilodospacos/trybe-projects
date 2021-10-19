const Products = require('../services/productsServices');

const getByIdProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Products.getByIdProducts(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Aconteceu erro ao buscar produto pelo id' });
  }
};

const getAllProducts = async (_req, res) => {
  try {
    const products = await Products.getAllProducts();
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ message: 'Aconteceu erro ao buscar os produtos' });
  }
};

const createProducts = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const data = await Products.createProducts({ name, quantity });
    return res.status(201).json(data);
  } catch (error) {
    return res.status(500).json({ message: 'Aconteceu erro ao criar o produto' });
  }
};

const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body;
    const result = await Products.updateProducts(id, name, quantity);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: 'Aconteceu erro ao atualizar o produto' });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    await Products.deleteProducts(id);
    return res.status(200).json({ message: 'Registro deletado com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Aconteceu erro ao deletar o produto' });
  }
};

module.exports = {
  getAllProducts,
  createProducts,
  getByIdProducts,
  updateProducts,
  deleteProducts,
};
