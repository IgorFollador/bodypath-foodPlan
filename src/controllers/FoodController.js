const database = require('../models');


class FoodController {
    static async readAllFoodsByPlanId(req, res) {
        const { id } = req.params; // plan_id

        try {
            const allFoods = await database.Foods.findAll({
                where: {
                    plan_id: id
                }
            })
            return res.status(200).json(allFoods);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

}

module.exports = FoodController;