function eventoclick () {
    alert('Você clicou no botão.');
    document.body.style.backgroundColor = "yellow";
    //Ao clicar no botão o corpo de fundo da página fica amarelo
}

function eventoDblClick () {
    alert("Você realizou um clique duplo no botão.");
    document.body.style.backgroundColor = "blue";
}

function mudarVermelho () {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function mudarPreto () {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "black";
}

function adicionaTexto () {
    let p = document.getElementById("teste");
    console.log('O mouse se moveu dentro da div.<br>')
}

function campoFocado () {
    document.getElementById("campoTexto").value = "";
}