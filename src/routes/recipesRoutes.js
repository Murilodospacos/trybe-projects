const router = require('express').Router();
const recipesControllers = require('../controllers/recipesControllers');
const {
  isValidateAuthorization, 
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
router.put('/:id',
  isValidateToken,
  isValidateAuthorization,
  recipesControllers.updateRecipe);

router.delete('/:id', isValidateToken, isValidateAuthorization, recipesControllers.deleteRecipe);

module.exports = router;