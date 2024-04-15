const router = require('express').Router();



router.get('/', async (req, res, next) => {
  res.send('REST API')
});

module.exports = router;