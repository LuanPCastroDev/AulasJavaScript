function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();
    switch (cor) {
        case "azul":
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
        default:
            document.getElementById("teste").innerHTML = "Nenhuma cor disponível para " + cor;        
            break;
    }
}

function verificaNumero() {
    let numero = document.getElementById("numero").value;
    numero = Number(numero);

    if (numero <= 10) {
        document.getElementById("testenumero").innerHTML = "O número informado é menor ou igual a 10. Você digitou: " + numero;
    } else if (numero > 10 && numero <= 1000) {
        document.getElementById("testenumero").innerHTML = "O número informado é maior que 10 e menor ou igual a 1000. Você digitou: " + numero;
    } else {
        document.getElementById("testenumero").innerHTML = "Você digitou: " + numero;
    }
}

