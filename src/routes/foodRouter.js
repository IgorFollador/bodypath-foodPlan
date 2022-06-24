const { Router } = require('express');
const FoodController = require('../controllers/FoodController.js');

const router = Router();

// router.get('/foods', FoodController.readAllMeals);
router.get('/foods/plan/:id', FoodController.readAllFoodsByPlanId);

router.post('/foods', FoodController.createFood);
// router.put('/foods/:id', FoodController.updateMeal);
router.delete('/foods/:id', FoodController.deleteFood);

module.exports = router;