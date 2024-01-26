var express = require('express');
var router = express.Router();
const produkController = require('../controller/produkController');


router.get('/all', produkController.getAllProduk);
router.get('/kategori', produkController.getAllKategori);
router.get('/kategori/:kategori_id', produkController.getProdukByKategoriId);
  
module.exports = router;