async function isValidate(req, res, next) {
  // const { id } = req.params;
  const { quantity } = req.body[0];
  if (quantity <= 0 || typeof quantity !== 'number') {
    return res.status(422).json({
      err: { code: 'invalid_data',
      message: 'Wrong product ID or invalid quantity' } });
  }
  next();
}

module.exports = { isValidate };
