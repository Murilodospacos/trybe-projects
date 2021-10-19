const { getAllProducts } = require('../services/productsServices');

async function isValidName(req, res, next) {
  const { name } = req.body;
  if (typeof name !== 'string' || name.length <= 5) {
    return res.status(422).json({
      err: { code: 'invalid_data',
      message: '"name" length must be at least 5 characters long' },
    });
  }
  const productdb = await getAllProducts('products');
  const filtered = await productdb.find((db) => db.name === name);
  if (filtered) {
    return res.status(422).json({
      err: { code: 'invalid_data',
      message: 'Product already exists' } });
  }
  next();
}

function isValidQuantity(req, res, next) {
  const { quantity } = req.body;
  if (quantity <= 0) {
    return res.status(422).json({ err: {
      code: 'invalid_data',
      message: '"quantity" must be larger than or equal to 1',
      } });
  }

  if (typeof quantity !== 'number') {
    return res.status(422).json({ err: {
      code: 'invalid_data',
      message: '"quantity" must be a number',
      } });
  }
  next();
}

module.exports = { isValidName, isValidQuantity };
