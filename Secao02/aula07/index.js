let nome = 'João'; // let: variável que pode ser alterada e com escopo de bloco

console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');

let sobrenome; // Declaração de variável como undefined
sobrenome = 'Silva'; // Inicialização de variável
console.log(nome, sobrenome);
sobrenome = 'Carvalho'; // Alteração de valor da variável
console.log(nome, sobrenome);

// let sobrenome; // Erro: SyntaxError: Identifier 'sobrenome' has already been declared, pois a variável já foi declarada

// Não podemos criar variáveis com palavras reservadas
// let let; // Erro: SyntaxError: Unexpected token 'let' // let é uma palavra reservada
// let if; // Erro: SyntaxError: Unexpected token 'if' // if é uma palavra reservada

// Variáveis precisam ter nomes significativos
// let n = 'João'; // Evitar nomes genéricos e siglas
let nomeCliente = 'João'; // Utilizar nomes que façam sentido
console.log(nomeCliente);

// Não podemos começar o nome de uma variável com um número
// let 1nome; // Erro: SyntaxError: Unexpected token '1'

// Não podem conter espaços ou traços
// let nome-Cliente; // Erro: SyntaxError: Unexpected token '-'

// Caso precise separar o nome de uma variável, utilize camelCase ou snake_case
let nomeCompletoDoCliente = 'João Silva'; // camelCase
let nome_completo_do_cliente = 'João Silva'; // snake_case

// Variáveis são case-sensitive (Letras maiúsculas e minúsculas fazem diferença)
let nomenovo = 'João';
let nomeNovo = 'João';
console.log(nomenovo, nomeNovo);

// Não podemos redeclarar variáveis com let
// let nomeCliente = 'João'; // Erro: SyntaxError: Identifier 'nomeCliente' has already been declared
// Se precisar alterar o valor da variável, basta atribuir um novo valor
nomeCliente = 'João';

// NÃO UTILIZE VAR, UTILIZE LET.
// var nomeCliente = 'João'; // Evite utilizar var, pois ela não possui escopo de bloco