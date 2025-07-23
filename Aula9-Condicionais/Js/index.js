var interruptor = 'on';

if(interruptor == "on") {
    alert('A lampada está ligada.');
} else {
    alert('A lampada está desligada.');
}

var hora = new Date().getHours();
if (hora < 12) {
    alert('Bom dia!');
} else if (hora < 18) {
    alert('Boa Tarde!')
} else {
    alert('Boa Noite!');
}