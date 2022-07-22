// > AULA 06 - TYPESCRIPT

// - Vantagens
// 1. Types
// 2. Utilização de JS mais recente
// 3. Novos recursos
// 4. Configurações
// 5. Melhorias nas sugestões de código

// - Como utilizar?
// 1. Inicializar um projeto Node.js na pasta: npm init -y
// 2. Instalar o pacote no TS como dependência de dev: npm i typescript -D
// 3. yarn tsc --init (npx tsc --init)
// 4. Compile o código utilizando o comando: npx [ou yarn] tsc index.ts

const soma = (a: number, b: number) => {
  return a + b;
};

let nome: string = "Walisson";
let idade: number = 26;

let altura: number;

altura = 1.77;

// ! Não aceita essa atribuição de valor
// altura = "1.77";

console.log("TypeScript");

const resultado = soma(10, 30);

console.log("Soma =", resultado);

console.clear();

// - COMO FAZER TIPAGENS NO TS?

let numero: number = 30;
const meuNome: string = "Walisson";
const booleano: boolean = true;

// * Arrays

const array: number[] = [];
const arr2: Array<number> = [1, 2, 3];

// * Objetos

// - Interfaces

interface Person {
  name: string;
  age: number;
  height: number;
  // birthDate?: Date
}

let pessoa: Person = {} as Person;

pessoa.name = "Walisson";
pessoa.age = 26;
pessoa.height = 1.77;

const pessoa2: { name: string; age: number; height: number } = {
  age: 30,
  name: "",
  height: 1.7,
};

// Tuples

type NumberOrString = number | string;

const variavel: NumberOrString = "";

type PairNameAge = [string, number];

const nameAge: PairNameAge = ["Walisson", 26];

// - Tipos literais

function getOneNumber(
  num1: number,
  num2: number,
  criteria?: "greater" | "lower"
): number {
  if (criteria === "greater") {
    return num1 > num2 ? num1 : num2;
  } else if (criteria === "lower") {
    return num1 < num2 ? num1 : num2;
  }

  return num1;
}

console.log(getOneNumber(10, 20, "greater"));

// - Tipagens de funções

const subtracao: (a: number, b: number) => void = (a: number, b: number) => {
  console.log(a - b);
};

let numeroQualquer: number = 20;
