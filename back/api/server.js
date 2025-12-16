require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// 🔥 ESSENCIAL
app.use(cors());
app.use(express.json());

// 🔗 AQUI ESTAVA O ERRO
const routes = require('./routes.js'); // ✅ ARQUIVO, NÃO PASTA
app.use('/api', routes);

// 🚀 SERVIDOR
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
