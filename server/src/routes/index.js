const { Router } = require('express');

const parkings = require('./parkings');

const router = Router();

router.use('/parkings', parkings);

module.exports = router;