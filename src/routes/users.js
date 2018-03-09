// @flow
const express = require('express');

const router = express.Router();
const User = require('../models/User');

/* GET users listing. */
router.get('/', (req, res, _next) => {
  const user = new User(
    'name',
    'email@email.com',
    'firstName',
    'lastName',
    'accessToken',
    new Date().getTime(),
  );
  res.send(user);
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

