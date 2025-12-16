document.getElementById("formCadastroProduto").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const descricao = document.getElementById("descricao").value;
    const imagem = document.getElementById("imagem").value;

    const produto = { nome, preco, descricao, imagem };

    try {
        const response = await fetch("http://localhost:3000/api/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(produto)
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById("mensagem").style.color = "lightgreen";
            document.getElementById("mensagem").textContent = "✔ Produto cadastrado com sucesso!";

            console.log("✔ Produto cadastrado:", data);

            // limpar o formulário
            document.getElementById("formCadastroProduto").reset();
        } else {
            document.getElementById("mensagem").style.color = "red";
            document.getElementById("mensagem").textContent = "Erro: " + data.erro;

            console.error("❌ Erro ao cadastrar:", data.erro);
        }

    } catch (erro) {
        console.error("❌ Erro geral no fetch:", erro);
        document.getElementById("mensagem").style.color = "red";
        document.getElementById("mensagem").textContent = "Erro ao conectar ao servidor.";
    }
});
