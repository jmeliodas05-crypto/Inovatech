document.getElementById("formCadastroUsuario").addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const dados = { nome, usuario, senha };

    try {
        const response = await fetch("http://localhost:3000/api/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        const data = await response.json();

        if (response.ok) {
            console.log("✔ Usuário cadastrado:", data);

            document.getElementById("mensagem").style.color = "lightgreen";
            document.getElementById("mensagem").textContent = "Usuário cadastrado com sucesso!";

            document.getElementById("formCadastroUsuario").reset();
        } else {
            console.error("❌ Erro ao cadastrar:", data.erro);

            document.getElementById("mensagem").style.color = "red";
            document.getElementById("mensagem").textContent = "Erro: " + data.erro;
        }

    } catch (err) {
        console.error("❌ Erro geral no fetch:", err);

        document.getElementById("mensagem").style.color = "red";
        document.getElementById("mensagem").textContent = "Erro ao conectar ao servidor.";
    }
});
