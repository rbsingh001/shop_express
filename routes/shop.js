
const path = require('path');
const express = require('express');
const router = express.Router();

const shopController = require('../controller/shop')
const contactController = require('../controller/contact')

router.get('/', shopController.home);

router.get('/contact-us',contactController.getContact);

router.get('/success',contactController.getSuccess);

module.exports = router;