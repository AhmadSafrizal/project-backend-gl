var express = require('express');
var router = express.Router();
const produkController = require('../controller/produkController');


router.get('/all', produkController.getAllProduk);
  
module.exports = router;