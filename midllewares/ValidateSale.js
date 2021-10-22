const isValidateQuantity = (req, res, next) => {
  const newSale = req.body;
  newSale.forEach((sale) => {
    if (sale.quantity <= 0 || typeof sale.quantity !== 'number') {
      return res.status(422).json({
        err: { code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity' } });
    }
  });
  next();
};

const isValidateSale = async (req, res, next) => {
  const addNewSale = req.body;
  const stock = addNewSale.some((s) => s.quantity < 0 || s.quantity >= 100);

  if (stock) {
    return res.status(404).json({
      err: {
        code: 'stock_problem',
        message: 'Such amount is not permitted to sell',
      },
    });
  }
  next();
};

module.exports = {
  isValidateQuantity,
  isValidateSale,
};
