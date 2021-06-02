const express = require ('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.route('/products/freeshipping')
      .get(productsController.getFreeShippingCart)

router.route('/products/')
      .get(productsController.getCart)

module.exports = router


