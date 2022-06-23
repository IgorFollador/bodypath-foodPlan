const database = require('../models');

class PlanController {

static async readPlanById(req, res) {
    const { id } = req.params;

    try {
        const plan = await database.Plans.findByPk(id, {
            include: {
                model: database.Clients,
                include: {
                    model: database.Users,
                    attributes: ['firstName', 'lastName']
                },
                attributes: {exclude: ['id', 'professional_id', 'createdAt', 'updatedAt']}
            },
        })

        return res.status(200).json(plan);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

static async readAllPlansByProfessionalId(req, res) {
    const { id } = req.params;
    
    try {
        const allPlans = await database.Plans.findAll({
            include: {
                model: database.Clients,
                include: {
                    model: database.Users,
                    attributes: ['firstName', 'lastName']
                },
                attributes: {exclude: ['id', 'professional_id', 'createdAt', 'updatedAt']}
            },
            where: {
                professional_id: id
            }
        });
        return res.status(200).json(allPlans);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

static async readAllPlansNamesByProfessionalId(req, res) {
    const { id } = req.params;
    try {
        const allPlans = await database.Plans.findAll({
            include: {
                model: database.Clients,
                include: {
                    model: database.Users,
                    attributes: ['firstName', 'lastName']
                },
                attributes: {exclude: ['id', 'professional_id', 'createdAt', 'updatedAt']}
            },
            attributes: ['id', 'createdAt', 'updatedAt'],
            where: {
                professional_id: id
            }
        });
        return res.status(200).json(allPlans);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

static async createPlan(req, res) {
    const formPlan = req.body;
    const client = await database.Clients.findByPk(formPlan.client_id);
    if(client === null) return res.status(404).json({ message: 'Client not found'})
    const professional = await database.Professionals.findByPk(formPlan.professional_id);
    if(professional === null) return res.status(404).json({ message: 'Professional not found'})

    try {
        const plan = await database.Plans.create(formPlan);
        return res.status(201).json(plan);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

static async updatePlan(req, res) {
    const { id } = req.params;
    const formPlan = req.body;
    try {
        const plan = await database.Plans.findByPk(id);
        if(plan === null) return res.status(404).json({ message: 'Plan not found' });
        
        await database.Plans.update(formPlan, {
            where: {
                id: Number(id)
            }
        })
        return res.status(200).json({ message: `ID ${id} updated` });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

static async deletePlan(req, res) {
    const { id } = req.params;
    
    try {
        const plan = await database.Plans.findByPk(id);
        if(plan === null) return res.status(404).json({ message: 'Plan not found'})

        await database.Plans.destroy({
            where: {
                id: Number(id)
            }
        })
        return res.status(200).json({ message: `Plan with ID ${id} deleted` });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

}

module.exports = PlanController;