
var express = require('express');
var router = express.Router();

var {create} = require('../controllers/cadastro')

//CLIENTES

router.post('/', create) //Cria um registro no banco

module.exports = router;