// Exercício sobre Constantes

/* 
    Imprima no console o seguinte texto:
    Danilo Silva tem 33 anos, pesa 98 kg
    tem 1.8 de altura e seu IMC é de 32.74416118146279
    Danilo nasceu em 1989
*/

const nome = 'Danilo';
const sobrenome = 'Silva';
const idade = 33;
const peso = 98;
const alturaEmMetros = 1.73;
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2021 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);