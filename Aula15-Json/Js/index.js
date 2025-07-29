const livros = [
    {
        "titulo": "O Nome do Vento",
        "autor": "Patrick Rothfuss",
        "ano_original": 2007,
        "ano_traducao": 2010,
        "avaliacao": 4.54
    },
    {
        "titulo": "A Guerra dos Tronos",
        "autor": "George R. R. Martin",
        "ano_original": 1996,
        "ano_traducao": 2000,
        "avaliacao": 4.5
    },
    {
        "titulo": "O Hobbit",
        "autor": "J. R. R. Tolkien",
        "ano_original": 1937,
        "ano_traducao": 1970,
        "avaliacao": 4.27
    }
];
console.log("Primeiro livro:", livros[0]);

function buscarCep() {
    let input = document.getElementById('cep').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        let obj = JSON.parse(this.responseText);

        if (obj.erro) {
            document.getElementById('areaTexto').innerHTML = "CEP não encontrado.";
        } else {
            let logradouro = obj.logradouro;
            let cidade = obj.localidade; 
            let estado = obj.uf;

            document.getElementById('areaTexto').innerHTML =
                "Logradouro: " + logradouro +
                "<br>Cidade: " + cidade +
                "<br>Estado: " + estado;
        }
    };
}
