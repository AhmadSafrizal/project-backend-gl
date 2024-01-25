var express = require('express');
var router = express.Router();
const produkController = require('../controller/produkController');


router.get('/all', produkController.getAllProduk);
router.get('/kategori', produkController.getAllKategori);

module.exports = router;