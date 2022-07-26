// > AULA 07 - HIGH ORDER FUNCTIONS

// First Class Function >> High Order Functions

// 1. Função que retorna uma função
// 2. Função que recebe outra função (como parâmetro) ✅

function welcome(courseName: string) {
  return (studentName: string) => {
    console.log(
      `Olá, ${studentName}! Seja bem-vinda(o) ao curso de ${courseName}!`
    );
  };
}

const welcomeToJavaScript = welcome("JavaScript");
const welcomeToPython = welcome("Python");

welcomeToJavaScript("Felipe");
welcomeToJavaScript("Marcus");
welcomeToJavaScript("Marcelo");
welcomeToJavaScript("Priscila");

console.clear();

// - Função que recebe outra função

const calculo = (
  operacao: (a: number, b: number) => number,
  num1: number,
  num2: number
) => operacao(num1, num2);

const soma = (num1: number, num2: number) => num1 + num2;
const subtracao = (num1: number, num2: number) => num1 - num2;
const multiplicacao = (num1: number, num2: number) => num1 * num2;
const divisao = (num1: number, num2: number) => num1 / num2;

// function calculo(soma, 2, 2) {
//   return soma(2, 2)
// }
const resultado = calculo(multiplicacao, 2, 2);

console.log(resultado);

// E se quisermos obter a média?

const media = calculo(divisao, calculo(soma, 10, 6), 2);

console.log("MEDIA(10, 6) =", media);

// Suponhamos que o num1 = 2**2
// 2**2 - 1

const resultado2 = calculo(subtracao, calculo(multiplicacao, 2, 2), 1);

console.log(resultado2);

// Exemplo: Função de alta ordem para validação de entrada: função de validação + valor a ser validado

console.clear();

// - FUNÇÕES DE ALTA DE ORDEM DE ARRAYS

let numeros = [34, 56, 23, 17, 86, 39];
const alunos = [
  { nome: "Quincy", media: 96 },
  { nome: "Jason", media: 84 },
  { nome: "Alexis", media: 100 },
  { nome: "Sam", media: 65 },
  { nome: "Katie", media: 90 },
];

// * `find()`

const elementoEncontrado = numeros.find((elemento) => {
  return elemento > 50; // true
});

console.log("elementoEncontrado:", elementoEncontrado);

// Como descobrir a média do aluno Alexis?

const dadosAlexis = alunos.find((aluno) => {
  return aluno.nome === "Alexis";
});

console.log(dadosAlexis);
console.log(dadosAlexis?.media);

// * `findIndex()`

console.clear();

const indexElementoEncontrado = numeros.findIndex((elemento) => {
  return elemento === 100; // true
});

console.log("indexElementoEncontrado:", indexElementoEncontrado);

const indexAlexis = alunos.findIndex((aluno) => {
  return aluno.nome === "Alexis";
});

console.log("indexAlexis:", indexAlexis);

// * `forEach()`
console.clear();

// for (let elemento of numeros) {
//   console.log(elemento)
// }

// ! O forEach retorna void (undefined)

numeros.forEach((numero) => {
  console.log(numero);
});

// * `every()`
console.clear();

numeros = [34, 56, 23, 17, 86, 39, -1];

const retornoEvery = numeros.every((numero) => numero > 0);

console.log(retornoEvery);

// * `some()`

const retornoSome = numeros.some((numero) => numero > 0);

console.log(retornoSome);

// * `map()`
console.clear();

// Elevar cada número ao quadrado
const numerosAoQuadrado = numeros.map((numero) => {
  if (numero > 0) {
    return numero ** 2;
  }

  return numero;
});

console.log(numerosAoQuadrado);

// Exemplo 02: transformar um array de strings em um array de números

console.clear();

const numerosString = ["1", "2", "3"];

// const numerosNumber = numerosString.map((numero) => Number(numero));

const transformToNumber = (elemento: string, index: number) => {
  return Number(elemento);
};

const numerosNumber = numerosString.map(transformToNumber);

console.log(numerosNumber);

// Exemplo 03

console.clear();

const carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const novoCarrinho = carrinho.map((item) => {
  return {
    ...item,
    total: (item.preco * item.quantidade).toFixed(2),
  };
});

console.log(novoCarrinho);

// * `filter()`

// * `reduce()`
