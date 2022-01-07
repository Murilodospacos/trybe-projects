const productService = require('../services/productService');

const products = async (_req, res) => {
  try {
    const result = await productService.getAllProducts();
    if (result.length < 1) {
      return res.status(200).json({ menssage: 'No products registered' });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json(console.log(error));
  };
};

module.exports = {
  products,
};