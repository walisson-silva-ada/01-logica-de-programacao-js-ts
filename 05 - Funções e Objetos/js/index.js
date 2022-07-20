// > AULA 05 - FUNÇÕES

// DRY: Don't Repeat Yourself

// Função básica
function saudacao() {
  console.log(
    "Seja bem-vindo(a) à Aula 05 de Lógica de Programação com JavaScript/TypeScript!"
  );
}

saudacao();

// Função com parâmetros

console.clear();

function saudacao(curso, nomeDoAluno) {
  console.log(
    `Olá, ${nomeDoAluno}! Seja bem-vindo(a) à Aula 05 do curso de ${curso}!`
  );
}

saudacao("Lógica de Programação com JavaScript/TypeScript", "Daniel");

// Função com retorno

function saudacao(nomeDoAluno, curso = "JavaScript") {
  const nome = nomeDoAluno || "Outro nome";

  return `Olá, ${nome}! Seja bem-vindo(a) à Aula 05 do curso de ${curso}!`;
}

console.log(saudacao("Bárbara", "TypeScript"));
console.log(saudacao(0));

console.clear();

function operacao(num1, num2, op = "soma") {
  if (op === "soma") {
    return num1 + num2;
  }

  return num1 - num2;
}

const resultado = operacao(10, 20, "lalala");

console.log(resultado);

console.clear();

// Outra forma de criar funções

const funcao = function () {
  console.log("Função sem nome.");
};

funcao();

// Arrow function

console.clear();

const soma = (num1, num2) => {
  return num1 + num2;
};

console.log(soma(10, 5));

const somaSemReturn = (num1, num2) => num1 + num2;

console.log(somaSemReturn(10, 5));
