function abrirTela(tela) {
    document.querySelectorAll(".tela").forEach(t => t.style.display = "none");
    document.getElementById(tela).style.display = "block";

    if (tela === "listar") atualizarLista();
    if (tela === "pagamento") atualizarSelect();
}

function salvarCliente() {
    let clientes = JSON.parse(localStorage.getItem("clientes") || "[]");

    clientes.push({
        nome: document.getElementById("nome").value,
        vencimento: document.getElementById("vencimento").value,
        valor: Number(document.getElementById("valor").value),
        pago: 0
    });

    localStorage.setItem("clientes", JSON.stringify(clientes));
    alert("Cliente salvo!");
}

function atualizarLista() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    let clientes = JSON.parse(localStorage.getItem("clientes") || "[]");

    clientes.forEach(c => {
        let li = document.createElement("li");
        li.textContent = `${c.nome} — Valor: R$${c.valor} — Pago: R$${c.pago}`;
        lista.appendChild(li);
    });
}

function atualizarSelect() {
    let select = document.getElementById("selectCliente");
    select.innerHTML = "";
    let clientes = JSON.parse(localStorage.getItem("clientes") || "[]");

    clientes.forEach((c, i) => {
        let op = document.createElement("option");
        op.value = i;
        op.textContent = c.nome;
        select.appendChild(op);
    });
}

function pagar() {
    let clientes = JSON.parse(localStorage.getItem("clientes") || "[]");
    let idx = document.getElementById("selectCliente").value;

    clientes[idx].pago += Number(document.getElementById("valorPago").value);

    localStorage.setItem("clientes", JSON.stringify(clientes));
    alert("Pagamento registrado!");
}
