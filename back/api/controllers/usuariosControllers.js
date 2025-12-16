const conexao = require('../../bd/conexao');

module.exports = {

  // LISTAR USUÁRIOS (opcional)
  listarUsuarios(req, res) {
    const sql = "SELECT * FROM usuarios";

    conexao.query(sql, (err, results) => {
      if (err) {
        console.error("❌ Erro ao listar usuários:", err.message);
        return res.status(500).json({ erro: err.message });
      }

      console.log("✔ Usuários listados com sucesso!");
      res.json(results);
    });
  },

  // CADASTRAR USUÁRIO
  criarUsuario(req, res) {
    const { nome, usuario, senha } = req.body;

    const sql = "INSERT INTO usuarios (nome, usuario, senha) VALUES (?, ?, ?)";

    conexao.query(sql, [nome, usuario, senha], (err, result) => {
      if (err) {
        console.error("❌ Erro ao criar usuário:", err.message);
        return res.status(500).json({ erro: err.message });
      }

      console.log(`✔ Usuário criado com sucesso! ID: ${result.insertId}`);

      res.json({
        mensagem: "Usuário cadastrado com sucesso!",
        id: result.insertId
      });
    });
  }
};
