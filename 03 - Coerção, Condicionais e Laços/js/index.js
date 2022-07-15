// AULA 03 - COERÇÃO DE TIPOS

let idade = 26; // prompt("Informe sua idade: ");

console.log(idade);
console.log(typeof idade);

// * 1. Coerção explícita (manual)

const idadeNumber = Number(idade);

console.log(idadeNumber);
console.log(typeof idadeNumber);

// - Conversão para boolean

// Falsy: 0, '', undefined, null, NaN

console.log(Boolean(NaN));

console.log(String(10));

// * 2. Coerção implícita (automática)

console.clear(); // Limpando o console

console.log("10" + 10); // Concatenação (junção)

console.log(10 + "10");

// Subtração

console.log(10 - "1"); // 9

console.log("3" * 4);

console.log(30 / "6");
console.log(30 / "X"); // NaN

console.log(isNaN(10));
console.log(isNaN("10"));
console.log(isNaN("X"));

console.log(typeof NaN);

/*
  > PARA PRATICAR

  - Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

  556 > 0:9:16
  1 > 0:0:1
  140153 > 38:55:53 
*/

console.clear();

const tempo = 556;

// Math.floor(x): sempre arredonda x para baixo
let horas = Math.floor(tempo / 3600);

let segundosRestantes = tempo - horas * 3600;

let minutos = Math.floor(segundosRestantes / 60);

let segundos = segundosRestantes - minutos * 60;

console.log("Horas:", horas);
console.log("Minutos:", minutos);
console.log("Segundos:", segundos);

console.log(`${horas}:${minutos}:${segundos}`);

console.clear();

// > OPERADORES BOOLEANOS (COMPARAÇÃO)

// >, <, >=, <=, ==, !=, ===, !==

idade = 16;

const souMaiorDeIdade = idade >= 18;

console.log(souMaiorDeIdade);

console.clear();

// == x ===

// == >> comparação de conteúdo (independe do tipo)
const ehIgual = 10 == "10"; // true

console.log(ehIgual);

// Não faz coerção de tipos: compara o conteúdo e o tipo da variável
const ehIgualIgual = 10 === "10";

console.log(ehIgualIgual);

console.log(10 != 10); // false
console.log(10 != "10"); // false
console.log(10 !== "10"); // true

// > ESTRUTURAS DE CONTROLE DE FLUXO

console.clear();

// - 1. ESTRUTURAS CONDICIONAIS

// * 1. if/else

const LIMIAR_MAIOR_IDADE = 18;

idade = 18; // Number(prompt("Informe a sua idade: "));

if (idade >= LIMIAR_MAIOR_IDADE) {
  console.log("Você é maior de idade!");
} else {
  console.log("Você é menor de idade.");

  let anosRestantes = LIMIAR_MAIOR_IDADE - idade;

  console.log(`Faltam ${anosRestantes} anos para você ser maior de idade.`);
}

// console.log(anosRestantes); // Não definida, caso utilize o let dentro do else

console.clear();

// * Exemplo 02: Obrigatoriedade de voto

// - Conjunção lógica
// && - AND
// || - OR

idade = 14;

// Entre 18 e 70: obrigatório
// Abaixo de 16: não é permitido
// Qualquer outra idade: Voto facultativo

if (idade >= 18 && idade < 70) {
  console.log("Voto obrigatório!");
} else if (idade < 16) {
  console.log("Não é permitido votar.");
} else {
  console.log("Voto facultativo.");
}

if (idade < 16) {
  console.log("Não é permitido votar.");
} else if ((idade >= 16 && idade < 18) || idade >= 70) {
  console.log("Voto facultativo.");
} else {
  console.log("Voto obrigatório!");
}

// ! NÃO É BOA PRÁTICA FAZER ISSO!

// if (idade < 16) {
//   console.log("Não é permitido votar.");
// }

// if ((idade >= 16 && idade < 18) || idade >= 70) {
//   console.log("Voto facultativo.");
// }

// if (idade >= 18 && idade < 70) {
//   console.log("Voto obrigatório!");
// }

/*
  🚨 ATIVIDADE

  Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par, escreva a mensagem "Valores aceitos", senão escreva "Valores não aceitos".

  - Exemplo de valores não aceitos: `5 6 7 8`
  - Exemplo de valores aceitos: `2 3 2 6`
*/
