let itens = [];
let total = 0;

/* Abrir carrinho */
function abrirCarrinho() {
    document.getElementById('carrinho').style.right = "0";
}

/* Fechar carrinho */
function fecharCarrinho() {
    document.getElementById('carrinho').style.right = "-390px";
}

/* Adicionar item */
function adicionarCarrinho(nome, preco) {
    itens.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

/* Atualizar carrinho */
function atualizarCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    lista.innerHTML = "";

    itens.forEach((item, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <strong>${item.nome}</strong><br>
            R$ ${item.preco.toFixed(2)} <br>
            <button class="btn-remover" onclick="removerItem(${index})">Remover</button>
        `;

        lista.appendChild(li);
    });

    document.getElementById('total').innerHTML = 
        `Total: R$ ${total.toFixed(2)}`;
}

/* Remover item */
function removerItem(index) {
    total -= itens[index].preco;
    itens.splice(index, 1);
    atualizarCarrinho();
}

/* Finalizar compra */
function comprar() {
    if (itens.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    alert("Compra concluída!");

    itens = [];
    total = 0;
    atualizarCarrinho();
}
