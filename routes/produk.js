var express = require("express");
var router = express.Router();
const produkController = require("../controller/produkController");
var verif = require("../library/verif");

router.get("/all",  produkController.getAllProduk);
router.get("/kategori",  produkController.getAllKategori);
router.get(
  "/kategori/:kategori_id",
  produkController.getProdukByKategoriId
);
router.get("/area/:area", produkController.getProdukByArea);

module.exports = router;
