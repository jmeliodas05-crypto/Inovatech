document.addEventListener("DOMContentLoaded", () => {
    console.log("login.js carregado.");

    const form = document.querySelector(".login-form");
    if (!form) return; // evita erro se não estiver na página de login

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const emailInput = document.getElementById("email");
        const senhaInput = document.getElementById("senha");

        if (!emailInput || !senhaInput) {
            alert("Campos de login não encontrados.");
            return;
        }

        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();

        if (!email || !senha) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, senha })
            });

            const data = await response.json();

            if (!response.ok) {
                alert(data.message || "Erro ao fazer login.");
                return;
            }

            alert("Login realizado com sucesso!");

            if (data.token) {
                localStorage.setItem("token", data.token);
            }

            window.location.href = "../html/admin.html";

        } catch (error) {
            console.error("Erro no fetch:", error);
            alert("Erro ao conectar ao servidor.");
        }
    });
});
