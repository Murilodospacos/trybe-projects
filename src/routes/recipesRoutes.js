const router = require('express').Router();
const multer = require('multer');
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

const storage = multer.diskStorage({
  destination: 'src/uploads',
  filename: (req, file, cb) => {
    const { id } = req.params;
    return cb(null, `${id}.jpeg`);
  },
});

const upload = multer({ storage });

router.put('/:id/image/', upload.single('image'), isValidateToken, recipesControllers.addImage);

router.delete('/:id', isValidateToken, isValidateAuthorization, recipesControllers.deleteRecipe);

module.exports = router;