const express = require('express');
const router = express.Router();

// Controllers
const usuarioController = require('./controllers/usuariosControllers');
const produtoController = require('./controllers/produtosControllers');
const authController = require('./controllers/authController');

// LOGIN
router.post('/login', authController.login);

// Rota inicial
router.get('/', (req, res) => {
  res.send('API funcionando corretamente!');
});

// Usuários
router.get('/usuarios', usuarioController.listarUsuarios);
router.post('/usuarios', usuarioController.criarUsuario);

// Produtos
router.get('/produtos', produtoController.listarProdutos);
router.post('/produtos', produtoController.criarProduto);

module.exports = router;
