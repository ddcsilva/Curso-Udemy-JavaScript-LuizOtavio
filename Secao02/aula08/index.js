// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não podem começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// Não utilize var, utilize const

// Não posso declarar uma constante sem inicializá-la
// const nome; // Erro: SyntaxError: Missing initializer in const declaration
const nome = 'João'; // const: variável que não pode ser alterada e com escopo de bloco
console.log(nome);

// + significa adição quando utilizado com números
// - significa subtração quando utilizado com números
// * significa multiplicação quando utilizado com números
// / significa divisão quando utilizado com números
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

// Para saber o tipo de uma variável, utilize typeof
console.log(typeof primeiroNumero);
let nomeAluno = 'João';
console.log(typeof nomeAluno);
let numeroString = '10';
console.log(primeiroNumero + numeroString); // Concatenação, pois o JavaScript entende que o número 5 é uma string