const conexao = require('../../bd/conexao');

module.exports = {
  
  // ===============================
  // LISTAR TODOS OS PRODUTOS
  // ===============================
  listarProdutos(req, res) {
    const sql = "SELECT * FROM produtos";

    conexao.query(sql, (err, results) => {
      if (err) {
        console.error("❌ Erro ao listar produtos:", err.message);
        return res.status(500).json({ erro: err.message });
      }

      console.log("✔ Produtos listados com sucesso!");
      res.json(results);
    });
  },

  // ===============================
  // CRIAR NOVO PRODUTO
  // ===============================
  criarProduto(req, res) {
    const { nome, preco, descricao, imagem } = req.body;

    const sql = `
      INSERT INTO produtos (nome, preco, descricao, imagem) 
      VALUES (?, ?, ?, ?)
    `;

    conexao.query(sql, [nome, preco, descricao, imagem], (err, result) => {
      if (err) {
        console.error("❌ Erro ao criar produto:", err.message);
        return res.status(500).json({ erro: err.message });
      }

      console.log(`✔ Produto criado com sucesso! ID: ${result.insertId}`);

      res.json({
        mensagem: "Produto criado com sucesso!",
        id: result.insertId
      });
    });
  }
};
