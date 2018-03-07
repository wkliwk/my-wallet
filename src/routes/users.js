var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const user = new User();
  res.json(user);
});

module.exports = router;


/**  * 
 *  < Expense >
 *  id
 *  createdAt
 *  updatedAt
 *  date
 *  amount
 *  currency
 *  classification { food, drink..... Lend }
 *  paymentMethod
 *  store
 *  remark
 *  metaData { repeate }
 *  images { url, createdAt }
 *  
 *  < Config >
 * 
 */

