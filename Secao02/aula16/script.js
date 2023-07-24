alert('Com a nossa mensagem'); // Exibe uma mensagem na tela
window.confirm('Deseja realmente apagar?'); // Exibe uma mensagem na tela com as opções OK e Cancelar
window.prompt('Digite o seu nome:'); // Exibe uma mensagem na tela com um campo para digitar o nome
const confirma = confirm('Deseja realmente apagar?'); // Exibe uma mensagem na tela com as opções OK e Cancelar e armazena o resultado na variável confirma
console.log(confirma); // Exibe o resultado da variável confirma no console

let num1 = prompt('Digite um número:'); // Exibe uma mensagem na tela com um campo para digitar o número e armazena o resultado na variável num1
let num2 = prompt('Digite outro número:'); // Exibe uma mensagem na tela com um campo para digitar o número e armazena o resultado na variável num2

// É necessário converter o valor das variáveis num1 e num2 para o tipo Number, pois o prompt retorna uma string
num1 = Number(num1); // Converte o valor da variável num1 para o tipo Number
num2 = Number(num2); // Converte o valor da variável num2 para o tipo Number

alert(`O resultado da soma foi ${num1 + num2}`); // Exibe uma mensagem na tela com o resultado da soma das variáveis num1 e num2
