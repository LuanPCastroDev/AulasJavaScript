let data =  new Date();
let ano = data.getFullYear();
let mes = data.getMonth();
let horas = data.getHours();
let minutos = data.getMinutes();
let segundos = data.getSeconds();
let milisegundos = data.getMilliseconds();

const mesesDoAno  = ["janeiro","Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro","Outubro", "Novembro", "Dezembro"];
let mesTexto = mesesDoAno[data.getMonth()]; 

document.getElementById("data").innerHTML = "Data: " + data;
document.getElementById("ano").innerHTML = "Ano: " + ano;
document.getElementById("mes").innerHTML = "Mês atual: " + mesTexto;
document.getElementById("horario").innerHTML = "Horário: " + horas + ":" + minutos + ":" + segundos + "." + milisegundos;