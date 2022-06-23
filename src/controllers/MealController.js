const database = require('../models');

class MealController {

    static async readAllMeals(req, res) {
        try {
            const allMeals = await database.Meals.findAll();

            return res.status(200).json(allMeals);
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    static async readMealById(req, res) {
        const { id } = req.params;

        try {
            const meal = await database.Meals.findByPk(id);

            return res.status(200).json(meal);
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }
    
    static async createMeal(req, res) {
        const formMeal = req.body;
    
        try {
            const meal = await database.Meals.create(formMeal);
            return res.status(201).json(meal);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }
    
    static async updateMeal(req, res) {
        const { id } = req.params;
        const formMeal = req.body;
        try {
            const meal = await database.Meals.findByPk(id);
            if(meal === null) return res.status(404).json({ message: 'Meal not found' });
            
            await database.Meals.update(formMeal, {
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ message: `ID ${id} updated` });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    
    static async deleteMeal(req, res) {
        const { id } = req.params;
        
        try {
            const meal = await database.Meals.findByPk(id);
            if(meal === null) return res.status(404).json({ message: 'Meal not found'})
    
            await database.Meals.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ message: `Meal with ID ${id} deleted` });
    
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = MealController;