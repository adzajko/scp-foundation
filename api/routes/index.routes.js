const { Router } = require('express');
const notFoundRoutes = require('./notFound.routes');
const skipRoutes = require('./skips.routes');

const router = Router();

router.use(skipRoutes);
router.use(notFoundRoutes);

module.exports = router;
