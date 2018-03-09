const express = require('express');

const router = express.Router();
const Point = require('../models/Point');

/* GET home page. */
router.get('/', (req, res, _next) => {
  const p = new Point(1, 2);

  res.send(p);
});

module.exports = router;
