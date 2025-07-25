function ativarContagem() {
    document.getElementById('tempo').innerHTML = "Começou a contar.";
    tempo = setTimeout( function() {
        document.getElementById('tempo').innerHTML = "Executou o setTimeout.";
    }, 5000);
}
 
function pararContagem() {
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem.";
}

function cronometro () {
    setInterval( function () {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) + 1;
        document.getElementById('tempo').innerHTML = soma;
    }, 1000);
}