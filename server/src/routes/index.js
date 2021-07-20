const { Router } = require('express');

const get = require('./get');

const router = Router();

router.use('/test', get);


module.exports = router;