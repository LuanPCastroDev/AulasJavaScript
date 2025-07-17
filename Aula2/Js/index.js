let a, b, c;

a = 100;
b = 1;
c = 50;  

let soma = a + b + c;

document.getElementById("resultado").innerHTML = "A soma dos elementos declarados dentro do documento javaScript é: " + soma; 

let numeros;
 
numeros = ("5 + 5");
document.getElementById("exemplo1").innerHTML = "Quando escrevemos dois números dentro de aspas duplas o javaScript não entende isso como uma soma, mas como um texto. Como nesse exemplo: " + numeros;
