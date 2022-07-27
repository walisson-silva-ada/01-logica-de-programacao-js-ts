// AULA 08 - HIGH ORDER FUNCTION II

// - map

let carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const novoCarrinho = carrinho.map((item) => {
  return {
    ...item,
    total: Number((item.preco * item.quantidade).toFixed(2)),
  };
});

console.log(novoCarrinho);

// - Filter

console.clear();

const numeros = [34, 56, 23, 17, 86, 39];

const numerosPares = numeros.filter((elemento) => {
  return elemento % 2 === 0;
});

console.log(numerosPares);

console.clear();

// Exemplo 02: Obter apenas os alunos que têm média igual ou superior a 85

const alunos = [
  { nome: "Quincy", media: 96 },
  { nome: "Jason", media: 84 },
  { nome: "Alexis", media: 100 },
  { nome: "Sam", media: 65 },
  { nome: "Katie", media: 90 },
];

const alunosMediaSuperior85 = alunos.filter((aluno) => aluno.media >= 85);

console.log(alunosMediaSuperior85);

// Exemplo 03: Crie um script para filtrar apenas pelos produtos que custam menos de R$ 10,00 e não são bebida.

interface IProduct {
  nome: string;
  preco: number;
  tipo: "Bebida" | "Comida" | "Produto de Limpeza";
}

const produtos: IProduct[] = [
  { nome: "Suco de laranja", preco: 7.5, tipo: "Bebida" },
  { nome: "Batata frita", preco: 10.5, tipo: "Comida" },
  { nome: "Pizza", preco: 12.49, tipo: "Comida" },
  { nome: "Chocolate", preco: 1.5, tipo: "Comida" },
  { nome: "Pastel", preco: 4.5, tipo: "Comida" },
  { nome: "Coca", preco: 6.99, tipo: "Bebida" },
];

const produtosFiltrados = produtos.filter(
  (produto) => produto.preco < 10 && produto.tipo !== "Bebida"
);

console.log(produtosFiltrados);

// - Reduce

// Exemplo 01: Somar todos os elementos de um array

console.clear();

let soma = 0;

// numeros.forEach((elemento) => {
//   soma += elemento;
// });

for (let elemento of numeros) {
  soma = soma + elemento;
}

console.log("Soma =", soma);

console.clear();

// Resolvendo utilizando o reduce

// [34, 56, 23, 17, 86, 39] >> 255

const somaCompleta = numeros.reduce((somaAcumulada, numero) => {
  return somaAcumulada + numero; // soma = soma + numero
}, 0);

console.log("Soma =", somaCompleta);

// Exemplo 02: E, se fosse a média?

// (a + b + c) / 3 = a / 3 + b / 3 + c / 3

const media = numeros.reduce((mediaAcumulada, elemento, _, array) => {
  return mediaAcumulada + elemento / array.length;
}, 0);

console.log(media);

// * Exemplo 03: E se eu quisesse somar apenas os números pares?

// const somaDosPares = numeros.reduce((somaAcumulada, numero) => {
//   if (numero % 2 === 0) {
//     return somaAcumulada + numero;
//   }

//   return somaAcumulada;
// }, 0);
const somaDosPares = numeros.reduce(
  (somaAcumulada, numero) =>
    numero % 2 === 0 ? somaAcumulada + numero : somaAcumulada,
  0
);

// Média dos números pares

const filterEvenNumbers = (numero: number) => numero % 2 === 0;

numeros
  .filter(filterEvenNumbers)
  .reduce((acc, numeroPar, _, array) => acc + numeroPar / array.length);

console.log("Soma dos pares:", somaDosPares);

const numbers = [1, 2, 3, 4];
const pesos = [0.4, 0.2, 0.2, 0.2];

/*
[
  { value: 10, weight: 0.2 },
  { value: 10, weight: 0.2 },
]
*/

numbers.reduce((acc, numero, indice) => numero * pesos[indice]);

// Exemplo 04: Calcule o total a pagar, considerando o carrinho de compras abaixo: 🤑

carrinho = [
  { produto: "feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const total = carrinho.reduce((totalAPagar, item) => {
  return totalAPagar + item.quantidade * item.preco;
}, 0);

console.log("Total a pagar:", total);

// * Juntando o map com o reduce

const totalComMap = carrinho
  .map((item) => item.preco * item.quantidade) // [totalItem1, totalItem2, ...]
  .reduce((acc, totalItem) => acc + totalItem);

console.log(totalComMap);
