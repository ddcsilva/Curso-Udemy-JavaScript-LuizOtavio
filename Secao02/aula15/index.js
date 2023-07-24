/**
 * Aritméticos
 * + Adição / Concatenação
 * - Subtração
 * / Divisão
 * * Multiplicação
 * ** Potenciação
 * % Resto da divisão
 * Precedência de operadores: (), **, * / %, + -
 * ++ Incremento
 * -- Decremento
 */

const num1 = 10;
const num2 = 5;
const num3 = 2;
console.log(`num1 + num2 = ${num1 + num2}`); // Adição
console.log(`num1 - num2 = ${num1 - num2}`); // Subtração
console.log(`num1 * num2 = ${num1 * num2}`); // Multiplicação
console.log(`num1 / num2 = ${num1 / num2}`); // Divisão
console.log(`num1 ** num2 = ${num1 ** num2}`); // Potenciação
console.log(`num1 % num2 = ${num1 % num2}`); // Resto da divisão

console.log(`(num1 + num2) * num3 = ${(num1 + num2) * num3}`); // Altera a ordem de precedência

let contador = 1;
console.log(`contador = ${contador}`);
contador++; // Operador de incremento, onde o valor de contador é incrementado em 1
console.log(`contador = ${contador}`);

/**
 * Operador de Incremento Pós e Pré Fixado
 * contador++ -> Pós fixado
 * ++contador -> Pré fixado
 * A diferença é que o pós fixado primeiro retorna o valor de contador 
 * e depois incrementa, enquanto o pré fixado primeiro incrementa e depois retorna o valor de contador
 */

let contador2 = 1;
console.log(`contador2 = ${contador2}`);
contador2--; // Operador de decremento, onde o valor de contador é decrementado em 1
console.log(`contador2 = ${contador2}`);

// É possível incrementar mais de 1, por exemplo contador += 2, onde o valor de contador é incrementado em 2
// O mesmo vale para o decremento, por exemplo contador -= 2, onde o valor de contador é decrementado em 2
const passo = 2;
let contador3 = 0;
console.log(`contador3 = ${contador3}`);
contador3 += passo; // contador3 = contador3 + passo
console.log(`contador3 = ${contador3}`);
contador3 += passo; // contador3 = contador3 + passo
console.log(`contador3 = ${contador3}`);

/**
 * Observação:
 * Posso utilizar esta forma com qualquer operador aritmético, 
 * por exemplo contador3 -= passo, contador3 *= passo, contador3 /= passo, contador3 **= passo, contador3 %= passo
 */

// NaN - Not a Number
const num4 = 10;
const num5 = 'Luiz'; // Não é um número
console.log(`num4 + num5 = ${num4 + num5}`); // Quando tentamos somar um número com uma string, será realizado uma concatenação
const num6 = parseInt('5'); // Converte a string em um número inteiro
console.log(`num4 + num6 = ${num4 + num6}`); // Agora será realizado uma soma
const num7 = parseFloat('5.2'); // Converte a string em um número decimal
console.log(`num4 + num7 = ${num4 + num7}`); // Agora será realizado uma soma
const num8 = Number('5.2'); // Converte a string em um número decimal. Convertendo com Number, não é necessário saber se é inteiro ou decimal
console.log(`num4 + num8 = ${num4 + num8}`); // Agora será realizado uma soma