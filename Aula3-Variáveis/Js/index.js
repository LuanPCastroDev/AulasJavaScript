//declaração de variáveis
var a,b,c;


//Atribuição de variáveis
a = 9;
b = 10;
c = a + b;

alert(c);

let d, e, f;

d = (5 * 9);
e = (10 * 80);
f = d + e;


document.getElementById("soma").innerHTML = "A soma dos elementos é: " + f;

var nome, sobrenome;
nome = "Luan";
sobrenome = "Patric de Castro";

document.getElementById("texto").innerHTML = "Meu nome é: " + nome + " " + sobrenome;

//Declarando variável com let não é possível redeclarar a variável

let planeta = "terra";

{
   let planeta = "marte";
}

document.getElementById("corpoceleste").innerHTML = "O planeta é " + planeta;

var x = 10;

{
    var x = 2;
}

document.getElementById("texto2").innerHTML = x;

//Utilizando a declaração Const = Como o nome diz a variável declarada como Const não permite mudança de nenhuma maneira dentro do código

const soma = (10 * 9);

{
    const soma = "100000";
}

document.getElementById("resultadosoma").innerHTML = "O resultado da soma é: " + soma;

