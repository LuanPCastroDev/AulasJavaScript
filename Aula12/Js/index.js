function ativarContagem() {
    document.getElementById('tempo').innerHTML = "Começou a contar";
    setTimeout( function() {
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";
    }, 5000);
}