const Sales = require('../services/salesServices');

const getByIdSales = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Sales.getByIdSales(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ err: {
      code: 'not_found',
      message: 'Sale not found',
    } });
  }
};

const getAllSales = async (req, res) => {
  try {
    const sales = await Sales.getAllSales();
    return res.status(200).json({ sales });
  } catch (error) {
    return res.status(500).json({ message: 'Aconteceu erro ao buscar as vendas' });
  }
};

const createSales = async (req, res) => {
  try {
    const sales = req.body;
    const result = await Sales.createSales(sales);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(422).json({
      err: { code: 'invalid_data',
      message: 'Wrong product ID or invalid quantity' } });
  }
};

const updateSales = async (req, res) => {
  try {
    const { id } = req.params;
    const { productId, quantity } = req.body;
    const result = await Sales.updateSales(id, productId, quantity);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(422).json({
      err: { code: 'invalid_data',
      message: 'Wrong product ID or invalid quantity' } });
  }
};

module.exports = {
  getByIdSales,
  getAllSales,
  createSales,
  updateSales,
};
