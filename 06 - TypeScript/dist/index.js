"use strict";
const soma = (a, b) => {
    return a + b;
};
let nome = "Walisson";
let idade = 26;
let altura;
altura = 1.77;
console.log("TypeScript");
const resultado = soma(10, 30);
console.log("Soma =", resultado);
console.clear();
let numero = 30;
const meuNome = "Walisson";
const booleano = true;
const array = [];
const arr2 = [1, 2, 3];
let pessoa = {};
pessoa.name = "Walisson";
pessoa.age = 26;
pessoa.height = 1.77;
const pessoa2 = {
    age: 30,
    name: "",
    height: 1.7,
};
const variavel = "";
const nameAge = ["Walisson", 26];
function getOneNumber(num1, num2, criteria) {
    if (criteria === "greater") {
        return num1 > num2 ? num1 : num2;
    }
    else if (criteria === "lower") {
        return num1 < num2 ? num1 : num2;
    }
    return num1;
}
console.log(getOneNumber(10, 20, "greater"));
const subtracao = (a, b) => {
    console.log(a - b);
};
let numeroQualquer = 20;
