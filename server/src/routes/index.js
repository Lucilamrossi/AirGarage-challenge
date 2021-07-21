const { Router } = require('express');

const get = require('./get');

const router = Router();

router.use('/api', get);


module.exports = router;