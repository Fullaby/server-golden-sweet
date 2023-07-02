const router= require('express').Router();
const Controller= require('../controllers/controllerData');

router.use('/read', Controller.getData)

module.exports= router