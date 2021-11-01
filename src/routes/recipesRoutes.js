const router = require('express').Router();
const recipesControllers = require('../controllers/recipesControllers');
const { 
  isValidateToken,
} = require('../midllewares/validateToken');
const {
  isValidateIdRecipe,
  isValidateNameRecipe,
  isvalidateIngredientsRecipe,
  isValidatePreparationRecipe,
} = require('../midllewares/validateRecipes');

router.get('/:id', isValidateIdRecipe, recipesControllers.getbyIdRecipes);
router.get('/', recipesControllers.getAllRecipes);
router.post('/',
  isValidateToken,
  isValidateNameRecipe,
  isvalidateIngredientsRecipe,
  isValidatePreparationRecipe,
  recipesControllers.createRecipes);

module.exports = router;