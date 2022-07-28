import input from "readline-sync";

function generateRandomNumber() {
  // Math.round(Math.random() * (max - min)) + min
  return Math.round(Math.random() * 19) + 1;
}

function getChoiceFromUser(numerosTentados: number[]): number {
  let choice = input.questionInt("Digite um número entre 1 e 20: ");

  while (choice < 1 || choice > 20 || numerosTentados.includes(choice)) {
    choice = input.questionInt(
      "\nNúmero inválido! Digite outro número (entre 1 e 20): "
    );
  }

  return choice;
}

while (true) {
  let numerosTentados: number[] = [];
  let numeroDeTentativas = 0;
  let numeroAleatorio = generateRandomNumber();
  let escolha: number;

  escolha = getChoiceFromUser(numerosTentados);

  while (numeroAleatorio !== escolha) {
    console.log("\nNúmero errado! ❌");
    numerosTentados.push(escolha);
    numeroDeTentativas++;

    escolha = getChoiceFromUser(numerosTentados);
  }

  console.log(
    `\n\nVocê acertou o número em ${++numeroDeTentativas} tentativas! O número era ${numeroAleatorio}. 🎉🎉\n\n`
  );

  const indexContinuePlaying = input.keyInSelect(
    ["Continuar jogando", "Encerrar o jogo"],
    "Deseja continuar jogando?",
    { cancel: false }
  );

  if (indexContinuePlaying !== 0) break;

  console.clear();
}
