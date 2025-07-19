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

comparacao = (valor1 == valor2);
document.getElementById("resultadocomparacao").innerHTML = "O resultado da comparação é  " + comparacao;

var valor3, valor4;
valor3 = 100;
valor4 = 100;
comparacao2 = (valor3 == valor4);
document.getElementById("resultadocomparacao2").innerHTML = "O resultado da comparação é  " + comparacao2 + ". Porque os números informados são: " + valor3 + " = " + valor4;

var valor5, valor6;
valor5 = "1000";
valor6 = 1000;
comparacaotipo = (valor5 === valor6);
document.getElementById("resultadotipo").innerHTML = "O resultado da comparação é  " + comparacaotipo + ". Porque os números informados são: " + valor5 + " = " + valor6 + ", mas o primeiro valor foi informado como texto.";

var valor7, valor8;
valor7 = 2;
valor8 = 1;

menor = (valor7 < valor8);
document.getElementById("resultadomenor").innerHTML = "O resultado da comparação é " + menor + ".Porque o valor " + valor7 + " é maior que o valor " + valor8;

var idade, eleitor;
idade = 18;
eleitor = (idade < 18) ? "Não eleitor" : "Sim, eleitor";

respostaeleitor = eleitor;
document.getElementById("resultadoeleitor").innerHTML = respostaeleitor;