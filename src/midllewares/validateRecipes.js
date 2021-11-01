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

module.exports = {
  isValidateNameRecipe,
  isvalidateIngredientsRecipe,
  isValidatePreparationRecipe,
};