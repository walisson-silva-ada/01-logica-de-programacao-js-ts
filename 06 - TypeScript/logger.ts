function logger(message: string) {
  console.log(message);
}

const mensagem = prompt("Informe a mensagem de log: ");

if (mensagem) {
  logger(mensagem);
}
