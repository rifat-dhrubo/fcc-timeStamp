const { timeNow, timeValidate } = require('./timeStamp.controller');
const { Router } = require('express');

router = Router();

router.get('/', timeNow);
router.get('/:date_string', timeValidate);

module.exports = router;
