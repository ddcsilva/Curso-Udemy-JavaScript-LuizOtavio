let num1 = 1; // Number
let num2 = 2.5; // Number

console.log(num1 + num2); // Operação normal
console.log(num1.toString() + num2); // Transforma num1 em string e concatena com num2
console.log(typeof num1); // Retorna o tipo da variável num1
console.log(num1.toString(2)); // Transforma num1 em binário

num1 = 10.5789551255547;
console.log(num1.toFixed(2)); // Arredonda num1 para 2 casas decimais, mas não altera o valor de num1
console.log(Number.isInteger(num1)); // Retorna true se num1 for inteiro e false se num1 for decimal

let temp = num1 * 'Olá'; // Retorna NaN (Not a Number)
console.log(Number.isNaN(temp)); // Retorna true se temp for NaN e false se temp não for NaN

num1 = 0.7;
num2 = 0.1;
console.log(num1 + num2); // Retorna 0.7999999999999999, porque o JavaScript não consegue representar números decimais com exatidão
console.log((num1 + num2).toFixed(2)); // Retorna 0.80, porque o método toFixed() arredonda o valor para 0.80

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0

num1 = Number(num1.toFixed(2)); // Transforma num1 em número e arredonda para 2 casas decimais
console.log(num1); // Retorna 2
console.log(Number.isInteger(num1)); // Retorna true

num1 = 0.7;
num2 = 0.1;

num1 = ((num1 * 100) + (num2 * 100)) / 100; // Retorna 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // Retorna 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // Retorna 1.0

console.log(num1); // Retorna 1.0
console.log(Number.isInteger(num1)); // Retorna true