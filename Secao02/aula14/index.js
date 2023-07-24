const nome = 'Danilo'; // String
const nome2 = "Danilo"; // String
const nome3 = `Danilo`; // String
const num1 = 10; // Number
const num2 = 10.52; // Number
let nomeAluno; // Undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const aprovado = false; // Boolean = true, false (lógico)

console.log(typeof nome, nome);
console.log(typeof nome2, nome2);
console.log(typeof nome3, nome3);
console.log(typeof num1, num1);
console.log(typeof num2, num2);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

let a = [1, 2]; // Array
const b = a; // Referência: b aponta para o mesmo local na memória que a

console.log(a, b);

b.push(3); // Altera o valor de a também

console.log(a, b); // Ambos os valores são alterados, pois a e b apontam para o mesmo local na memória