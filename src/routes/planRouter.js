const { Router } = require('express');
const PlanController = require('../controllers/PlanController.js');

const router = Router();

// router.get('/plans', PlanController.readAllPlans);
// router.get('/plans/:id', PlanController.readPlan);
router.get('/plans/professional/:id', PlanController.readAllPlansByProfessionalId); 
router.get('/plans/professional/:id/names', PlanController.readAllPlansNamesByProfessionalId);

router.post('/plans', PlanController.createPlan);
router.put('/plans/:id', PlanController.updatePlan);
router.delete('/plans/:id', PlanController.deletePlan);

module.exports = router;