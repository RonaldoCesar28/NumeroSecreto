// const prompt = require('prompt-sync')();

alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); //gerar número aleatório
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto chute não for igual ao numero secreto faça
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
// Se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}   

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // Operador ternário
 alert(`Isso aí! Você descobriu o número secreto era ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//      alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`); // Template Strings para concatenar
// } else {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }