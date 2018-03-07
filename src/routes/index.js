const express = require('express');
const router = express.Router();
const user = require('../models/user');
const Point = require('../models/Point');

/* GET home page. */
router.get('/', function(req, res, next) {
  let p = new Point(1, 2)
  
  console.log(`${p.x}`)

  res.json({ title: p });
});

module.exports = router;
