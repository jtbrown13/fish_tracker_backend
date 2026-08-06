const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getFishes);
router.get('/:id', controller.getFishByID);

module.exports = router;