const { ObjectId } = require('mongodb');

const isValidateNameRecipe = (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const isvalidateIngredientsRecipe = (req, res, next) => {
  const { ingredients } = req.body;
  if (!ingredients || ingredients === '') {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const isValidatePreparationRecipe = (req, res, next) => {
  const { preparation } = req.body;
  if (!preparation || preparation === '') {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  next();
};

const isValidateIdRecipe = (req, res, next) => {
  const { id } = req.params;
  const result = ObjectId.isValid(id);
  if (!result) {
    return res.status(404).json({ message: 'recipe not found' });
  }
  next();
};

module.exports = {
  isValidateIdRecipe,
  isValidateNameRecipe,
  isvalidateIngredientsRecipe,
  isValidatePreparationRecipe,
};