const { Router } = require('express');
const {
  findObjectsByDesignation,
  getAllObjects,
  getObjectsByClass,
  addNewSkip,
  findSkipById
} = require('../controllers/skips.controller');

const router = Router();

router
  .route('/scps')
  .get(getAllObjects)
  .post(addNewSkip);
router.post('/search', findObjectsByDesignation);
router.get('/scps/classes/:objectClass', getObjectsByClass);
router.get('/scps/:id', findSkipById);

module.exports = router;
