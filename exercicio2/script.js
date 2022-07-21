
let number1 = prompt(
    "Escreva o primeiro número que vier a sua cabeça")
let number2 = prompt(
    "Escreva o segundo número que vier em sua cabeça")

const operaçao1 = Number(number1) > Number(number2)
const operaçao2 = Number(number1) === Number(number2)
const operaçao3 = Number(number1) % Number(number2) === 0
const operaçao4 = Number(number2) % Number(number1) === 0
 
console.log("O primeiro numero é maior que segundo?", operaçao1)
console.log("O primeiro numero é igual ao segundo?",operaçao2)
console.log("O primeiro numero é divisível pelo segundo?",operaçao3)
console.log("O segundo numero é divisível pelo primeiro?",operaçao4)


