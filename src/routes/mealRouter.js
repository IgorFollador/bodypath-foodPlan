const { Router } = require('express');
const MealController = require('../controllers/MealController.js');

const router = Router();

router.get('/meals', MealController.readAllMeals);
router.get('/meals/:id', MealController.readMealById);

router.post('/meals', MealController.createMeal);
router.put('/meals/:id', MealController.updateMeal);
router.delete('/meals/:id', MealController.deleteMeal);

module.exports = router;