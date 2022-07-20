// - AULA 04 - LAÇOS E ARRAYS

// * Como ler dados utilizando o Node.js?

// const readlineSync = require("readline-sync");

// const name = readlineSync.question("Informe o seu nome: ");

// readlineSync.keyInSelect(["Opção 1", "Opção 2"]);

// // prompt("Informe seu nome: ");

// console.log("Nome:", name);

// > ESTRUTURAS DE REPETIÇÃO

// - 1. while: estrutura de repetição não controlada (condicional)

// - 2. for: repetição controlada (laço numérico)

// * WHILE

// Muito útil quando queremos validar alguma informação
// Quando não sabemos quantas vezes devemos repetir um trecho de código

// let saldoNoBanco = Number(prompt("Qual é o seu saldo no banco: "));

// while (saldoNoBanco < 0) {
//   console.log("Saldo inválido. O saldo precisa ser maior ou igual a zero.");

//   saldoNoBanco = Number(prompt("Informe o seu saldo novamente: "));
// }

// console.log("Saldo adicionado com sucesso! ✅");

// Exemplo 02

// Solicitar vários números e parar quando digitar um número negativo.

// let maiorNumero = 0;

// let numero = Number(prompt("Informe um número: "));

// while (numero !== -1) {
//   if (numero > maiorNumero) {
//     maiorNumero = numero;
//   }

//   numero = Number(prompt("Informe outro número (digite -1 para terminar): "));
// }

// console.log("O maior número que o usuário digitou foi", maiorNumero);

// Exemplo 03 - While com contador

// let contador = 0;
// const MAX_ITER = 10; // 10 iterações

// while (contador < MAX_ITER) {
//   console.log(contador);

//   // contador++; // incrementa 1 unidade na variável

//   contador += 2; // contador = contador + 2
// }

// console.log("Terminou!");

// break      - Encerra o laço
// continue   - Volta para o início do laço
// ! Não é boa prática utilizar o break e o continue! EVITE-OS AO MÁXIMO!!

// Do-while
// ? Via de regra, dá para se fazer tudo com o While (não sendo necessário utilizar o do-while)

// let idade;

// do {
//   idade = Number(prompt("Informe sua idade: "));
// } while (idade < 0);

// console.log("Idade cadastrada com sucesso!");

// - 2. FOR

// termo 1: inicialização da variável de controle
// termo 2: condição de parada
// termo 3: incremento dado à variável de controle (sempre acontece após o término da iteração)

// let somaDasNotas = 0; // 0 é o elemento neutro da soma (acumulador)
// let nota = 0;

// for (let iterador = 0; iterador < 5; ++iterador) {
//   nota = Number(prompt("Informe a nota do aluno: "));

//   somaDasNotas += nota;
// }

// console.log(somaDasNotas / 5);

// - É possível utilizar o for para percorrer estruturas do JavaScript

// string: conjunto de caracteres

const linguagem = "JavaScript";

for (let posicao = 0; posicao < 10; posicao++) {
  console.log(linguagem[posicao]);
}

console.clear();

// > ARRAYS

// Tipos primitivos (number, string, boolean) x Estruturas de Dados

const arrayVazio = new Array(10);

const nomes = new Array("André", "Arthur", "Bruno");

const pessoa = ["Walisson", 26, 1.77, true];

console.log(arrayVazio);
console.log(nomes);
console.log(pessoa);

// Indexação: acessar os elementos do array

console.log(nomes[0]);

console.log(pessoa.length);

console.log(pessoa[pessoa.length - 1]);

console.clear();

// - MÉTODOS DOS ARRAYS (função que está associada ao array)

const numeros = [1, 2, 3, 4, 5];

// * 1. Adicionando elementos no array

// push: adiciona ao final do array

numeros.push(6);
numeros.push(7, 8);

console.log(numeros);

// unshift

numeros.unshift(0);
numeros.unshift(-2, -1);

console.log(numeros);

// * 2. Removendo elementos

// pop: remove o último elemento do array

numeros.pop();

console.log(numeros);

// shift: remove o primeiro elemento do array

numeros.shift();

console.log(numeros);

// * Buscando elementos no array

// indexOf

console.log("O índice do elemento 3 é", numeros.indexOf(3));

// lastIndexOf

numeros.push(3, 10);

console.log(numeros);
console.log("O índice do elemento 3 é", numeros.lastIndexOf(3));

// includes: testar a existência de um elemento no array

console.log("Existe o elemento 20 no array?", numeros.includes(10));

// Fatiamento (slice) de arrays

console.log(numeros.slice(3));
console.log(numeros.slice(3, 5));

// Concatenando arrays

console.clear();

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);

console.log(arr3);

console.log(numeros);
console.log(numeros.slice(3, 5).concat(numeros.slice(7, 10)));

const novoArray = new Array(10).fill(0);

console.log(novoArray);

arr1.reverse();

console.log(arr1);

const data = [18, 7, 2022];

console.log(data.join("/"));

console.log(data);

// splice

console.clear();

console.log(arr3);

const retorno = arr3.splice(2, 2, ["Walisson", "Silva"]);

console.log(arr3);
console.log(retorno);

console.clear();

// spread

console.log(pessoa);

const [nome, idade, altura, isProfessor] = pessoa;

console.log(nome, idade, altura, isProfessor);

const [, , minhaIdade] = pessoa;

console.log(minhaIdade);

const [primeiroNome, ...otherInfo] = pessoa;

console.log(primeiroNome);
console.log(otherInfo);

// arr1 = [3, 2, 1] >> ...arr1 = 1, 2, 3
// arr2 = [4, 5, 6] >> ...arr2 = 4, 5, 6
const arr = [...arr1, ...arr2, 7]; // [3, 2, 1, 4, 5, 6]

console.log(arr);

// - for-in | for-of

console.clear();

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// for-in
console.clear();

// ! Percorre os índices, mas como string!
// in -> índices (o que você precisa para os valores)

for (let variavel in nomes) {
  console.log(variavel, typeof variavel);
}

// for-of
console.clear();

// Percorre os valores (of -> valor)
for (let variavel of nomes) {
  console.log(variavel);
}

// MATRIZES

console.clear();

const matriz = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

console.log(matriz);

matriz.push([16, 17, 18, 19, 20]);

console.log(matriz);

console.log("Primeiro elemento", matriz[0]);
console.log("Primeiro valor da matriz:", matriz[0][0]);

console.clear();

for (let linha of matriz) {
  console.log("Linha");
  for (let elemento of linha) {
    console.log(elemento);
  }
}

console.clear();

for (let i = 0; i < matriz.length; i++) {
  console.log(`Linha ${i + 1}`);
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(matriz[i][j]);
  }
}
