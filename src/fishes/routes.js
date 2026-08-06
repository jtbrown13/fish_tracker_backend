const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getFishes);
router.get('/:id', controller.getFishByID);
router.post('/', controller.addNewFish);

module.exports = router;