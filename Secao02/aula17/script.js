let num1 = prompt('Digite um número:'); // Exibe uma mensagem na tela com um campo para digitar o número e armazena o resultado na variável num1
let num2 = prompt('Digite outro número:'); // Exibe uma mensagem na tela com um campo para digitar o número e armazena o resultado na variável num2
let soma = 0; // Cria a variável soma e atribui o valor 0

// É necessário converter o valor das variáveis num1 e num2 para o tipo Number, pois o prompt retorna uma string
num1 = Number(num1); // Converte o valor da variável num1 para o tipo Number
num2 = Number(num2); // Converte o valor da variável num2 para o tipo Number

soma = num1 + num2; // Atribui o resultado da soma das variáveis num1 e num2 para a variável soma

alert(`O resultado da soma foi ${soma}`); // Exibe uma mensagem na tela com o resultado da soma das variáveis num1 e num2