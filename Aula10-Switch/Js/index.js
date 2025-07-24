function verificaCor() {
    let cor = document.getElementById("cor").value;

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

    switch(numero) {
        case "numero <= 10":
            document.getElementById("testenumero").innerHTML = "O número informado é menor ou igual a 10. Você digitou: " + numero;
            break;
        case "numero > 10" || "numero <= 1000":
            document.getElementById("testenumero").innerHTML = "O número informado é maior que 10 ou menor ou igual a 1000. Você digitou: " + numero;
            break;
        default:
            document.getElementById("testenumero").innerHTML = "Você digitou: " + numero;
            break;
    }
}

