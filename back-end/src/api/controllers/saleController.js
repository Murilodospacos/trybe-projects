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

const salesByUserId = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await saleService.getByUserId(id);
    if (result.length < 1) {
    return res.status(200).json({ message: 'No sales registered' });
    }
    return res.status(200).json(result);
    } catch (error) {
    return res.status(400).json(console.log(error.message));
    }
};

const saleOrderDetails = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await saleService.getByOrderId(id);
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(400).json(console.log(error.message));
  }
}

// const newOrder = async (req, res) => {
//   try {
//     const sales = req.body;
//     const { userId  } = await saleService.createNewOrder(sales);
//     const message = 'Created'
//     return res.status(201).json({ message: message, userId });
//   } catch (error) {
//     return res.status(500).json(console.log(error.message));
//   }
// };

module.exports = {
  allSales,
  salesByUserId,
  saleOrderDetails,
  // newOrder,
};