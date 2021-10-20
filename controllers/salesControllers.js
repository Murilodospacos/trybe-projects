const Sales = require('../services/salesServices');

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

module.exports = {
  getAllSales,
  createSales,
};
