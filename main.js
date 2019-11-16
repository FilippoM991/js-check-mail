var listaMail = ['pippo@gmail.it', 'paperino@gmail.it', 'topolino@gmail.it'];
console.log(listaMail);
var mailUtente = prompt('Qual è la tua mail?');
console.log(mailUtente);
for (var i = 0; i < listaMail.length; i++) {
    var elementiLista = listaMail[i];
    if (mailUtente == elementiLista) {
        console.log('Benvenuto');
        document.getElementById('testo').innerHTML = "Benvenuto";
        break;
    }
    else {
        console.log('Indirizzo non trovato')
        document.getElementById('testo').innerHTML = "Accesso negato";
    }

}
