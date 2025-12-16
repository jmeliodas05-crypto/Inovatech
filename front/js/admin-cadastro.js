// Seleciona os elementos
const form = document.getElementById("formCadastro");
const mensagem = document.getElementById("mensagem");

// Evento ao enviar o formulário
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recarregar a página

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Validação simples
    if (!nome || !email || !senha) {
        mostrarMensagem("Preencha todos os campos!", "erro");
        return;
    }

    // Aqui você futuramente integrará com o backend (fetch/axios)
    // Por enquanto é só simulação
    const usuario = {
        nome,
        email,
        senha
    };

    console.log("Usuário cadastrado:", usuario);

    mostrarMensagem("Usuário cadastrado com sucesso!", "sucesso");

    form.reset(); // limpa os campos
});

// Função para exibir mensagens
function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;

    if (tipo === "sucesso") {
        mensagem.style.color = "#27ff9a";
    } else {
        mensagem.style.color = "#ff4f4f";
    }

    mensagem.style.opacity = "1";

    // Some depois de 3 segundos
    setTimeout(() => {
        mensagem.style.opacity = "0";
    }, 3000);
}
