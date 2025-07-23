var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "leite";

const listadecompras = [ "arroz", "feijão", "macarrão", "leite", "frango", "toddy", "veja", "detergente" ];

document.getElementById("produto").innerHTML = "Produto da lista: " + listadecompras[0];
document.getElementById("produto1").innerHTML = "Produto da lista: " + listadecompras[1];
document.getElementById("produto2").innerHTML = "Produto da lista: " + listadecompras[2];
document.getElementById("produto3").innerHTML = "Produto da lista: " + listadecompras[3];
document.getElementById("produto4").innerHTML = "Produto da lista: " + listadecompras[4];
document.getElementById("produto5").innerHTML = "Produto da lista: " + listadecompras[5];
document.getElementById("produto6").innerHTML = "Produto da lista: " + listadecompras[6];
document.getElementById("produto7").innerHTML = "Produto da lista: " + listadecompras[7];

const livros = [];
livros [0] = "O Nome do Vento – Patrick Rothfuss";
livros [1] = "O Senhor dos Anéis – J.R.R. Tolkien";
livros [2] = "Mistborn: Nascidos da Bruma – O Império Final";
livros [3] = "A Guerra dos Tronos – George R.R. Martin";
livros [4] = "O Hobbit – J.R.R. Tolkien";
livros [5] = "A Roda do Tempo: O Olho do Mundo – Robert Jordan";
livros [6] = "O Feiticeiro de Terramar – Ursula K. Le Guin";
livros [7] = "O Assassin’s Apprentice (O Aprendiz de Assassino) – Robin Hobb";
livros [8] = "Eragon – Christopher Paolini";
livros [9] = "American Gods – Neil Gaiman";
livros [10] = "As Brumas de Avalon – Marion Zimmer Bradley";

document.getElementById("livro").innerHTML = "Livro: " + livros[0];
document.getElementById("livro1").innerHTML = "Livro: " + livros[1];
document.getElementById("livro2").innerHTML = "Livro: " + livros[2];
document.getElementById("livro3").innerHTML = "Livro: " + livros[3];
document.getElementById("livro4").innerHTML = "Livro: " + livros[4];
document.getElementById("livro5").innerHTML = "Livro: " + livros[5];
document.getElementById("livro6").innerHTML = "Livro: " + livros[6];
document.getElementById("livro7").innerHTML = "Livro: " + livros[7];
document.getElementById("livro8").innerHTML = "Livro: " + livros[8];
document.getElementById("livro9").innerHTML = "Livro: " + livros[9];
document.getElementById("livro10").innerHTML = "Livro: " + livros[10];


const pessoa = ["Luan", "Patric", "de", "Castro", "34"];

alert(pessoa.length);
document.getElementById("tamanho").innerHTML = "A matriz criada possui " + pessoa.length + " elementos";
pessoa.push("brasileiro");
pessoa.push("desenvolvedor");
pessoa.push("estudando para concurso");


document.getElementById("tamanho").innerHTML = "A matriz criada possui " + pessoa.length + " elementos";

console.log(pessoa);

document.getElementById("imprimirmatriz").innerHTML = pessoa;
document.getElementById("imprimirmatriz2").innerHTML = pessoa.join(" - ");

pessoa.pop();
document.getElementById("imprimirmatriz3").innerHTML = pessoa.join(" - ");
pessoa.shift();
document.getElementById("imprimirmatriz4").innerHTML = pessoa.join(" - ");