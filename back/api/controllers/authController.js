const conexao = require('../../bd/conexao');

module.exports = {

    login: (req, res) => {
        console.log("▶️ ROTA /login CHAMADA");
        console.log("📩 Body recebido:", req.body);

        const { email, senha } = req.body;

        // 1️⃣ Validação
        if (!email || !senha) {
            console.error("❌ Email ou senha não enviados");
            return res.status(400).json({
                message: "Preencha email e senha"
            });
        }

        // 2️⃣ Query
        const sql = `
            SELECT id, nome, email, senha 
            FROM usuarios 
            WHERE email = ? 
            LIMIT 1
        `;

        console.log("🧠 Executando SQL:", sql);
        console.log("📧 Email usado:", email);

        conexao.query(sql, [email], (err, results) => {

            // 3️⃣ Erro SQL
            if (err) {
                console.error("🔥 ERRO NO MYSQL");
                console.error(err);
                return res.status(500).json({
                    message: "Erro interno no banco de dados"
                });
            }

            console.log("📦 Resultado do SELECT:", results);

            // 4️⃣ Usuário não encontrado
            if (!results || results.length === 0) {
                console.warn("⚠️ Usuário não encontrado");
                return res.status(401).json({
                    message: "Usuário não encontrado"
                });
            }

            const usuario = results[0];

            // 5️⃣ Senha incorreta
            if (usuario.senha !== senha) {
                console.warn("❌ Senha incorreta");
                return res.status(401).json({
                    message: "Senha incorreta"
                });
            }

            // 6️⃣ Login OK
            console.log("✅ LOGIN REALIZADO COM SUCESSO");

            return res.status(200).json({
                message: "Login realizado com sucesso",
                usuario: {
                    id: usuario.id,
                    nome: usuario.nome,
                    email: usuario.email
                },
                token: "TOKEN_EXEMPLO_123"
            });
        });
    }

};
