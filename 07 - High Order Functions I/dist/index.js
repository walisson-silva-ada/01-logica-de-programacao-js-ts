"use strict";
// > AULA 07 - HIGH ORDER FUNCTIONS
// First Class Function >> High Order Functions
// 1. Função que recebe outra função (como parâmetro)
// 2. Função que retorna uma função
function welcome(courseName) {
    return (studentName) => {
        console.log(`Olá, ${studentName}! Seja bem-vinda(o) ao curso de ${courseName}!`);
    };
}
const welcomeToJavaScript = welcome("JavaScript");
welcomeToJavaScript("Felipe");
welcomeToJavaScript("Marcus");
welcomeToJavaScript("Marcelo");
welcomeToJavaScript("Priscila");
