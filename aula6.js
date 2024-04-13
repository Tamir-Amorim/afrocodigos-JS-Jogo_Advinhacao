const prompt = require("prompt-sync")();


let numero_correto = parseInt(Math.random() *101);
let numero = 0
let cont = 1

do {
    numero = parseInt(prompt("Faça uma tentativa!"));
        if (numero === numero_correto){console.log("Parabéns! você acertou!\nVc realizou " + cont + " tentativas");}
        if (numero > numero_correto){console.log("Informe um valor menor");}
        else if (numero < numero_correto){console.log("Informe um valor maior");}
    cont++;

} while (numero !== numero_correto) 

// Com carinho,
// Tamir 