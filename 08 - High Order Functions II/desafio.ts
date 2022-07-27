const input = require("readline-sync");

function generateRandomNumber() {
  // Math.round(Math.random() * (max - min)) + min
  return Math.round(Math.random() * 19) + 1;
}

let numerosTentados: number[] = [];
let numeroAleatorio = generateRandomNumber();
let escolha = input.questionInt("Digite um número entre 1 e 20: ");

while (numeroAleatorio !== escolha) {
  console.log("Número errado!");

  escolha = input.questionInt("Digite um número entre 1 e 20: ");
}

console.log("Você acertou o número!");
