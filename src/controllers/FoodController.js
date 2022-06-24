const database = require('../models');


class FoodController {
    static async readAllFoodsByPlanId(req, res) {
        const { id } = req.params; // foodPlan_id

        try {
            const allFoods = await database.Foods.findAll({
                include: {
                    model: database.Meals,
                    attributes: ['descr_meal'],
                },
                where: {
                    foodPlan_id: id
                }
            })
            return res.status(200).json(allFoods);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    static async createFood(req, res) {
        const formFood = req.body;
        const foodPlan = await database.Foodplans.findByPk(formFood.foodPlan_id);
        if(foodPlan === null) return res.status(404).json({ message: 'Food Plan not found'})
        const meal = await database.Meals.findByPk(formFood.meal_id);
        if(meal === null) return res.status(404).json({ message: 'Meal not found'})

        try {
            const food = await database.Foods.create(formFood);
            return res.status(201).json(food);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }

    static async deleteFood(req, res) {
        const { id } = req.params;
        
        try {
            const food = await database.Foods.findByPk(id);
            if(food === null) return res.status(404).json({ message: 'Food not found'})
    
            await database.Foods.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({ message: `Food with ID ${id} deleted` });
    
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = FoodController;