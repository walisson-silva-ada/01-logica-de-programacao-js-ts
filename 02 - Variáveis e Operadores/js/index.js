// AULA 02 - VARIÁVEIS

/* ALGORITMO
  1. Entrada de dados
  2. Processamento
  3. Saída de Dados
*/

// VARIÁVEIS

// Tipagem dinâmica e fraca

// let: variável que você pode alterar o conteúdo

let idade = 20; // number
let altura = 1.77; // number
let nome = "Walisson"; // string
let souDesenvolvedor = true; // boolean (true OR false)

let variavel;

console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Nome:", nome);
console.log("Sou desenvolvedor:", souDesenvolvedor);

console.log(typeof souDesenvolvedor);

// VAR x LET x CONST

console.log(nomeDoAluno);

var nomeDoAluno = "André";

console.log(nomeDoAluno);

// const

idade = 26;

console.log("Idade atualizada:", idade);

const modulo = "Lógica de Programação";

console.log(modulo);

// TEMPLATE STRING (TEMPLATE LITERALS)

console.clear();

console.log("TEMPLATE STRING (TEMPLATE LITERALS)");

const mensagem = `Olá, ${nomeDoAluno}! Seja bem-vindo ao primeiro módulo do curso!`;

console.log(mensagem);
console.log(typeof mensagem);

// - OPERADORES MATEMÁTICOS

console.clear();

console.log("OPERADORES MATEMÁTICOS");

// + | - | * | / | ** | %

const numero1 = 10;
const numero2 = 40;

console.log(10 + 40);
console.log(`numero1 + numero2 = ${numero1 + numero2}`);

// Concatenação de strings
console.log("Walisson" + "Silva");

// - OPERADORES UNÁRIOS

console.log(typeof nome);
console.log(-10);
console.log(+"10");

// pós-incremento
idade++; // idade = idade + 1 (idade += 1)

console.log(idade);

let numero = 0;

console.log(numero++);

console.log(numero);

// pré-incremento

numero = 0;

console.log(++numero);

// - PRECEDÊNCIA DE OPERADORES

console.log((10 + 20) / 2);

let soma = 10 + 11;

// Math

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

const nomeDoUsuario = prompt("Informe o seu nome: ");

console.log("O nome do usuário é", nomeDoUsuario);
