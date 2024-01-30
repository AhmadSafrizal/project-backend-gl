var express = require('express');
var router = express.Router();
var verif = require("../library/verif");
const usersController = require('../controller/usersController');



router.get('/getAllUser', verif.cekAPI, usersController.getAllUser);
router.get('/getUserById/:userId', usersController.getUserById);
router.get('/getApiKey/:no_hp', usersController.getApiKey);
router.put('/updateUser/:user_id', usersController.updateUser);
router.post('/registerUser', usersController.registerUser);
  
module.exports = router;