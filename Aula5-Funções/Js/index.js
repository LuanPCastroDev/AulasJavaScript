function soma (valor1, valor2) {
    return valor1 + valor2;
}

document.getElementById("funcaosoma").innerHTML = "O resultado da soma é: " + soma(150,200);

function subtracao (valor1, valor2) {
    return valor1 - valor2;
}
document.getElementById("funcaosubtracao").innerHTML = "O resultado da subtração é: " + subtracao(150,200);

function divisao (valor1, valor2) {
    return valor1 / valor2;
}
document.getElementById("funcaodivisao").innerHTML = "  O resultado da divisão é: " + divisao(148,1000);

function converterDolar (real, dolar) {
    return real * dolar;
}

var valorReal = 10.98;
var cotacaoDolar = 5.58;
var resultado = converterDolar(valorReal, cotacaoDolar);

document.getElementById("realdolarconversao").innerHTML = "O resultado da conversão em dólar é: R$ " + resultado; 