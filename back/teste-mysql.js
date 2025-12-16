require('dotenv').config();
const conexao = require('./bd/conexao');

console.log('🔍 Iniciando teste de SELECT nos usuários...');

const sql = 'SELECT id, nome, email FROM usuarios';

conexao.query(sql, (err, results) => {
    if (err) {
        console.error('❌ ERRO AO EXECUTAR SELECT');
        console.error(err);
        return;
    }

    console.log('✅ SELECT EXECUTADO COM SUCESSO');
    console.table(results);

    process.exit(); // encerra o script
});
