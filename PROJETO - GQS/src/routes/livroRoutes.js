const express = require('express');
const router = express.Router();
const livroController = require('../controllers/livroController');

router.post('/livros', livroController.cadastrarLivro);

module.exports = router;
