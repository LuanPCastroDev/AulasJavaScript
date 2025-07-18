var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = valor1 + valor2;
document.getElementById("resultado").innerHTML = "o resultado da soma é =  " + total;

totalsubtracao = valor1 - valor2;
document.getElementById("resultadosubtracao").innerHTML = "o resultado da subtração é =  " + totalsubtracao;

totaldivisao = valor1 / valor2;
document.getElementById("resultadodivisao").innerHTML = "o resultado da divisão é =  " + totaldivisao;

totalmultiplicacao = valor1 * valor2;
document.getElementById("resultadomultiplicacao").innerHTML = "o resultado da multiplicação é =  " + totalmultiplicacao;

totalincremento = ++valor1;
document.getElementById("resultadoinclemento").innerHTML = "Após o incremento de 1 no valor definido para o valor já existente. O valor ficou:  " + totalincremento;

totaldecremento = --valor1;
document.getElementById("resultadodecremento").innerHTML = "Após o decremento de 1 no valor definido para o valor já existente. O valor ficou:  " + totaldecremento;