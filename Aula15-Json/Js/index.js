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
  },
  {
    "titulo": "O Senhor dos Anéis",
    "autor": "J. R. R. Tolkien",
    "ano_original": 1954,
    "ano_traducao": 1970,
    "avaliacao": 4.5
  },
  {
    "titulo": "O Olho do Mundo",
    "autor": "Robert Jordan",
    "ano_original": 1990,
    "ano_traducao": 2009,
    "avaliacao": 4.19
  },
  {
    "titulo": "Mistborn: Nascidos da Bruma",
    "autor": "Brandon Sanderson",
    "ano_original": 2006,
    "ano_traducao": 2011,
    "avaliacao": 4.49
  },
  {
    "titulo": "Eragon",
    "autor": "Christopher Paolini",
    "ano_original": 2002,
    "ano_traducao": 2005,
    "avaliacao": 4.2
  },
  {
    "titulo": "As Mentiras de Locke Lamora",
    "autor": "Scott Lynch",
    "ano_original": 2006,
    "ano_traducao": 2008,
    "avaliacao": 4.31
  },
  {
    "titulo": "Sombra e Ossos",
    "autor": "Leigh Bardugo",
    "ano_original": 2012,
    "ano_traducao": 2014,
    "avaliacao": 4.15
  },
  {
    "titulo": "A Rainha Vermelha",
    "autor": "Victoria Aveyard",
    "ano_original": 2015,
    "ano_traducao": 2016,
    "avaliacao": 4.15
  },
  {
    "titulo": "Harry Potter e a Pedra Filosofal",
    "autor": "J. K. Rowling",
    "ano_original": 1997,
    "ano_traducao": 1999,
    "avaliacao": 4.47
  },
  {
    "titulo": "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda‑roupa",
    "autor": "C. S. Lewis",
    "ano_original": 1950,
    "ano_traducao": 1970,
    "avaliacao": 4.24
  },
  {
    "titulo": "A Batalha do Apocalipse",
    "autor": "Eduardo Spohr",
    "ano_original": 2011,
    "ano_traducao": 2011,
    "avaliacao": 4.1
  },
  {
    "titulo": "Heróis de Éter: Caçadores de Bruxas",
    "autor": "Raphael Draccon",
    "ano_original": 2011,
    "ano_traducao": 2011,
    "avaliacao": 4.0
  },
  {
    "titulo": "Os Sete",
    "autor": "André Vianco",
    "ano_original": 2000,
    "ano_traducao": 2000,
    "avaliacao": 3.9
  },
  {
    "titulo": "A Arma Escarlate",
    "autor": "Renata Ventura",
    "ano_original": 2017,
    "ano_traducao": 2017,
    "avaliacao": 4.0
  },
  {
    "titulo": "Exorcismos, Amores e Uma Dose de Blues",
    "autor": "Eric Novello",
    "ano_original": 2014,
    "ano_traducao": 2014,
    "avaliacao": 3.8
  },
  {
    "titulo": "Ordem Vermelha",
    "autor": "Felipe Castilho",
    "ano_original": 2017,
    "ano_traducao": 2017,
    "avaliacao": 4.1
  },
  {
    "titulo": "O Espadachim de Carvão",
    "autor": "Affonso Solano",
    "ano_original": 2013,
    "ano_traducao": 2013,
    "avaliacao": 4.0
  },
  {
    "titulo": "Sopro dos Deuses",
    "autor": "Fábio Kabral",
    "ano_original": 2024,
    "ano_traducao": 2024,
    "avaliacao": 3.9
  },
  {
    "titulo": "Filhos da Lua",
    "autor": "Marcella Rossetti",
    "ano_original": 2018,
    "ano_traducao": 2018,
    "avaliacao": 4.0
  },
  {
    "titulo": "Alek Ciaran e os Guardiões da Escuridão",
    "autor": "Shirley Souza",
    "ano_original": 2020,
    "ano_traducao": 2020,
    "avaliacao": 3.7
  },
  {
    "titulo": "Supernova: O Encantador de Flechas",
    "autor": "Renan Carvalho",
    "ano_original": 2013,
    "ano_traducao": 2013,
    "avaliacao": 3.8
  },
  {
    "titulo": "Labirinto de Espelhos",
    "autor": "Barbara Negrão",
    "ano_original": 2014,
    "ano_traducao": 2014,
    "avaliacao": 3.7
  },
  {
    "titulo": "Do Outro Lado do Espelho",
    "autor": "Emilly Amite",
    "ano_original": 2015,
    "ano_traducao": 2015,
    "avaliacao": 3.6
  },
  {
    "titulo": "Apenas Mais Uma Aventura",
    "autor": "Lucas Fernandes",
    "ano_original": 2016,
    "ano_traducao": 2016,
    "avaliacao": 3.5
  },
  {
    "titulo": "In Nomine Patris",
    "autor": "Décio Gomes",
    "ano_original": 2017,
    "ano_traducao": 2017,
    "avaliacao": 3.6
  },
  {
    "titulo": "A Flecha de Fogo",
    "autor": "Leonel Caldela",
    "ano_original": 2024,
    "ano_traducao": 2024,
    "avaliacao": 4.0
  },
  {
    "titulo": "A Lenda de Ruff Ghanor",
    "autor": "Leonel Caldela",
    "ano_original": 2019,
    "ano_traducao": 2019,
    "avaliacao": 3.8
  },
  {
    "titulo": "Entre Barafunda e Bravura",
    "autor": "Flávio Fayad",
    "ano_original": 2020,
    "ano_traducao": 2020,
    "avaliacao": 3.7
  },
  {
    "titulo": "Tupinilândia",
    "autor": "Samir Machado de Machado",
    "ano_original": 2022,
    "ano_traducao": 2022,
    "avaliacao": 3.8
  },
  {
    "titulo": "O Feitiço da Ilha do Pavão",
    "autor": "João Ubaldo Ribeiro",
    "ano_original": 1997,
    "ano_traducao": 1997,
    "avaliacao": 3.9
  },
  {
    "titulo": "A Dama do Amanhecer",
    "autor": "Rafael Silva",
    "ano_original": 2019,
    "ano_traducao": 2019,
    "avaliacao": 3.8
  },
  {
    "titulo": "Reino de Belfront",
    "autor": "Jaqueline Moniz",
    "ano_original": 2018,
    "ano_traducao": 2018,
    "avaliacao": 3.8
  },
  {
    "titulo": "Lebre da Madrugada",
    "autor": "Arthur Malvavisco",
    "ano_original": 2021,
    "ano_traducao": 2021,
    "avaliacao": 3.7
  },
  {
    "titulo": "O Segredo do Kelpie",
    "autor": "Aya Imaeda",
    "ano_original": 2021,
    "ano_traducao": 2021,
    "avaliacao": 3.6
  },
  {
    "titulo": "A Paisagem Limiar",
    "autor": "Cosme Aristides",
    "ano_original": 2021,
    "ano_traducao": 2021,
    "avaliacao": 3.6
  },
  {
    "titulo": "Maldição dos Inocentes",
    "autor": "Camila Pelegrini",
    "ano_original": 2018,
    "ano_traducao": 2018,
    "avaliacao": 3.7
  },
  {
    "titulo": "Os Noturnos",
    "autor": "Flávia Muniz",
    "ano_original": 2015,
    "ano_traducao": 2015,
    "avaliacao": 3.7
  },
  {
    "titulo": "A Arte dos Contos de Fada",
    "autor": "Irmãos Grimm (vários tradutores)",
    "ano_original": 1812,
    "ano_traducao": 2000,
    "avaliacao": 4.0
  },
  {
    "titulo": "A Espada do Destino",
    "autor": "Andrzej Sapkowski",
    "ano_original": 1992,
    "ano_traducao": 2012,
    "avaliacao": 4.2
  },
  {
    "titulo": "Stardust: O Mistério da Estrela",
    "autor": "Neil Gaiman",
    "ano_original": 1999,
    "ano_traducao": 2003,
    "avaliacao": 4.1
  },
  {
    "titulo": "Neverwhere",
    "autor": "Neil Gaiman",
    "ano_original": 1996,
    "ano_traducao": 1998,
    "avaliacao": 4.1
  },
  {
    "titulo": "O Ciclo da Herança",
    "autor": "Christopher Paolini",
    "ano_original": 2002,
    "ano_traducao": 2005,
    "avaliacao": 4.1
  },
  {
    "titulo": "A História Sem Fim",
    "autor": "Michael Ende",
    "ano_original": 1979,
    "ano_traducao": 1980,
    "avaliacao": 4.0
  },
  {
    "titulo": "O Urso e o Rouxinol",
    "autor": "Catherine Duggan (inspirado em lendas russas)",
    "ano_original": 2017,
    "ano_traducao": 2017,
    "avaliacao": 4.0
  },
  {
    "titulo": "Discworld (Discaterra)",
    "autor": "Terry Pratchett",
    "ano_original": 1983,
    "ano_traducao": 2000,
    "avaliacao": 4.2
  }, 

]

let texto = JSON.stringify(livros);
document.getElementById('areaTexto').innerHTML = texto;

function buscarCep() {
    let input = document.getElementById('cep').value;
    
    const ajax = new XMLHttpRequest();
    ajax.open('Get', 'https://viacep.com.br/ws/' + input + '/json');
    ajax.send();
    
    ajax.onload = function() {
        let obj = json.parse(this.responseText);

        let logradouro = obj.logradouro;
        let cidade = obj.cidade;
        let estado = obj.uf;
        
        document.getElementById('textoCep').innerHTML = "Logradouro: " + logradouro + 
        "<br> Cidade: " + cidade + "<br> Estado: " + estado;
    }


}