const { ObjectId } = require('mongodb');

async function isValidId(req, res, next) {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(422).json({
      err: { code: 'invalid_data',
      message: 'Wrong id format' } });
  }
  next();
}

module.exports = { isValidId };
