let varA = 'A'; // Valor de A tenha o valor de B
let varB = 'B'; // Valor de B tenha o valor de C
let varC = 'C'; // Valor de C tenha o valor de A

// Solução 01, utilizando uma variável temporária
// Esta é a forma mais comum de trocar os valores de duas variáveis

let varTemp = varA;
varA = varB;
varB = varC;
varC = varTemp;

console.log(varA, varB, varC);

varA = 'A'; // Valor de A tenha o valor de B
varB = 'B'; // Valor de B tenha o valor de C
varC = 'C'; // Valor de C tenha o valor de A

// Solução 02, utilizando desestruturação
// Utilizando a desestruturação, é possível trocar os valores de duas variáveis sem a necessidade de criar uma variável temporária

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);