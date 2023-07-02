const router= require('express').Router();
const Controller= require('../controllers/controllerData');

router.get('/read', Controller.getData)
router.get('/read/:id', Controller.getDataByCategories)

module.exports= router