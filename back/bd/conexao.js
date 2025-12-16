const mysql = require('mysql2');

console.log("🔍 Variáveis de ambiente:");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS ? "OK" : "VAZIO");
console.log("DB_NAME:", process.env.DB_NAME);

const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

conexao.connect(err => {
    if (err) {
        console.error("❌ ERRO AO CONECTAR NO MYSQL");
        console.error(err);
    } else {
        console.log("✅ MYSQL CONECTADO COM SUCESSO");
    }
});

module.exports = conexao;
