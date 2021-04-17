const { Router } = require('express');
const { handleNotFound } = require('../controllers/notFound.controller');

const router = Router();

router.use('*', handleNotFound);

module.exports = router;
