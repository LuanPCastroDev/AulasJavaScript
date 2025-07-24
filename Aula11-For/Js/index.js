for (let i = 0; i <= 1000; i++) {
    document.getElementById("repeticaoTeste").innerHTML += i + ", "; 
}

for (let j = 1000; j >= 0; j--) {
    document.getElementById("repeticaoReversa").innerHTML += j + ", ";
}

for (let i = 1900; i <= 2025; i++) {
    document.getElementById("ano").innerHTML += "<option value =  " + i + " ";
}