const saleService = require('../services/saleService');

const allSales = async (_req, res) => {
  try {
    const result = await saleService.getAll();
    if (result.length < 1) {
    return res.status(200).json({ message: 'No sales registered' });
    }
    return res.status(200).json(result);
    } catch (error) {
    return res.status(400).json(console.log(error));
    }
};

const salesById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await saleService.getBydId(id);
    if (result.length < 1) {
    return res.status(200).json({ message: 'No sales registered' });
    }
    return res.status(200).json(result);
    } catch (error) {
    return res.status(400).json(console.log(error.message));
    }
}; 

module.exports = {
  allSales,
  salesById,
};