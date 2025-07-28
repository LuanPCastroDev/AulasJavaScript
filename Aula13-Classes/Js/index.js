class Carro {
    constructor (valor1, valor2, valor3, valor4) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
        this.motor = valor4;
    }
}

const sandero = new Carro("Renault", "Stepway", "2019-2020", "1.6");
const polo = new Carro("Volkswagen", "Polo", "2024-2025", "1.6");

document.getElementById("carro1").innerHTML = 
"Carro 1 = Marca: " + sandero.marca +
", Modelo: " + sandero.modelo +
", Ano: " + sandero.ano +
", Motor: " + sandero.motor;

console.log(sandero);
console.log(polo);