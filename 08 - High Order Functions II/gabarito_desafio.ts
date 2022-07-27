// - Crie um código que gere um número aleatório entre 1 e 20 e, em seguida, solicita um número do usuário (entre 1 e 20). Seu programa deve continuar solicitando o número até que o usuário acerte o número sorteado.

// Considere, também, os requisitos funcionais abaixo:

// 1. O usuário deve conseguir visualizar seu número de tentativas.
// 2. O usuário deve conseguir visualizar os números que ele já tentou.
// 3. Não é permitido que o usuário entre com um número que não esteja entre 1 e 20, ou um número que ele já inseriu antes.
// 4. Ao acertar, o usuário deve ter a opção de jogar novamente.
// 5. O recorde do usuário deverá ser salvo e atualizado.

const readlineSync = require("readline-sync");

function generateRandomNumber(min?: number, max?: number) {
  const minValue = min ?? 1;
  const maxValue = max ?? 20;

  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

function validateInput(choice: number, tentativas: number[]) {
  while (
    isNaN(choice) ||
    choice < 1 ||
    choice > 20 ||
    tentativas.includes(choice)
  ) {
    choice = Number(
      readlineSync.question(
        "\nOpção inválida! Informe outro número entre 1 e 20: "
      )
    );
  }
}

while (true) {
  let choice: number;
  let numeroDeTentativas = 0;
  const tentativas: number[] = [];

  const randomNumber = generateRandomNumber();

  choice = Number(readlineSync.question("\nInforme um número entre 1 e 20: "));
  validateInput(choice, tentativas);

  while (choice !== randomNumber) {
    console.clear();
    console.log("\nEsse não é o número correto! ❌\n");
    numeroDeTentativas++;
    tentativas.push(choice);

    console.log("Números que você já tentou:", ...tentativas, "\n");
    choice = Number(readlineSync.question("Informe um número entre 1 e 20: "));
    validateInput(choice, tentativas);
  }

  console.clear();
  console.log(
    `\n\nVocê acertou o número em ${++numeroDeTentativas} tentativas! O número era ${randomNumber}! 🎉 🎉\n\n`
  );

  const continuePlayingResponse = readlineSync.keyInSelect(
    ["Continuar", "Encerrar o jogo"],
    "Deseja continuar?",
    { cancel: false }
  );

  if (continuePlayingResponse === 1) break;
  console.clear();
}
