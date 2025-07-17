let a, b, c;
a = 100;
b = 1;
c = 50;  
let soma = a + b + c;

document.getElementById("resultado").innerHTML = "A soma dos elementos declarados dentro do documento javaScript é: " + soma; 

let numeros;
numeros = ("5 + 5");

document.getElementById("exemplo1").innerHTML = "Quando escrevemos dois números dentro de aspas duplas o javaScript não entende isso como uma soma, mas como um texto. Como nesse exemplo: " + numeros;

let somadenumeros;
somadenumeros = ( 2 + 8 );

document.getElementById("exemplo2").innerHTML = "Quando escrevemos dois números dentro de parênteses, mas sem aspas duplas o javaScript entende isso como uma soma. Como nesse exemplo: " + somadenumeros;

let nome;
let idade;
nome = "Luan";
idade = "34";

document.getElementById("apresentacao").innerHTML = "Meu nome é " + nome + ".Tenho " + idade + " anos de idade ";