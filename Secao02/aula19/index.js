let umaString = "Um \"texto\""; // Usando aspas duplas dentro de aspas duplas
console.log(`Utilizando aspas duplas: ${umaString}`);

umaString = "Um \texto"; // Dessa forma, a letra t é ignorada
console.log(`Ignorando o caractere t: ${umaString}`);

console.log(''); // Pula uma linha

umaString = 'Um texto';
// As strings são indexadas, ou seja, cada caractere possui um índice
console.log(`O caractere na posição 4: ${umaString[4]}`); // Retorna o caractere na posição 4
console.log(umaString[-1]); // Retorna undefined, pois não existe índice negativo
console.log(`O caractere na posição 6: ${umaString.charAt(6)}`); // Retorna o caractere na posição 6

console.log(''); // Pula uma linha

// Concatenando strings
// concat: função utilizada para concatenar strings
console.log(`Concatenando strings: ${umaString.concat(' em um lindo dia.')}`); // Concatena a string
console.log(`Concatenando strings: ${umaString + ' em um lindo dia.'}`); // Concatena a string
console.log(`Concatenando strings: ${umaString} em um lindo dia.`); // Concatena a string

console.log(''); // Pula uma linha

// Retorna o índice da primeira ocorrência do caractere
// indexOf: função utilizada para retornar o índice da primeira ocorrência do caractere
console.log(`O índice da primeira ocorrência de 'texto': ${umaString.indexOf('texto')}`); // Retorna 3
console.log(`O índice da primeira ocorrência de 'Texto': ${umaString.indexOf('Texto')}`); // Retorna -1, pois não existe
console.log(`O índice da primeira ocorrência de 'o': ${umaString.indexOf('o')}`); // Retorna 7

console.log(''); // Pula uma linha

// Retorna o índice da última ocorrência do caractere
// lastIndexOf: função utilizada para retornar o índice da última ocorrência do caractere
console.log(`O índice da última ocorrência de 'o': ${umaString.lastIndexOf('o', 3)}`); // Retorna 1

console.log(''); // Pula uma linha

// Utilizando match com expressões regulares
// match: função utilizada para retornar um array com as ocorrências do caractere
console.log(`Utilizando match com expressões regulares: ${umaString.match(/[a-z]/g)}`); // Retorna um array com todas as letras minúsculas
console.log(`Utilizando match com expressões regulares: ${umaString.match(/[a-z]/)}`); // Retorna a primeira letra minúscula
console.log(`Utilizando match com expressões regulares: ${umaString.match(/[a-z]/i)}`); // Retorna a primeira letra minúscula, ignorando o case sensitive

console.log(''); // Pula uma linha

// Utilizando search com expressões regulares
// search: função utilizada para retornar o índice da primeira ocorrência do caractere
console.log(`Utilizando search com expressões regulares: ${umaString.search(/[a-z]/g)}`); // Retorna o índice da primeira letra minúscula
console.log(`Utilizando search com expressões regulares: ${umaString.search(/[a-z]/)}`); // Retorna o índice da primeira letra minúscula
console.log(`Utilizando search com expressões regulares: ${umaString.search(/[a-z]/i)}`); // Retorna o índice da primeira letra minúscula, ignorando o case sensitive

console.log(''); // Pula uma linha

// Utilizando replace
// replace: função utilizada para substituir caracteres
console.log(`Utilizando replace: ${umaString.replace('Um', 'Outro')}`); // Substitui a primeira ocorrência de 'Um' por 'Outro'
console.log(`Utilizando replace: ${umaString.replace(/Um/g, 'Outro')}`); // Substitui todas as ocorrências de 'Um' por 'Outro'

umaString = 'O rato roeu a roupa do rei de Roma.';
console.log(`Utilizando replace: ${umaString.replace(/r/gi, '#')}`); // Substitui todas as ocorrências de 'r' por '#', ignorando o case sensitive

console.log(''); // Pula uma linha

// Verificando o tamanho da string
// length: propriedade utilizada para retornar o tamanho da string
console.log(`Verificando o tamanho da string: ${umaString.length}`); // Retorna o tamanho da string

console.log(''); // Pula uma linha

// Utilizando slice
// slice: função utilizada para retornar uma parte da string
console.log(`Utilizando slice: ${umaString.slice(2, 6)}`); // Retorna 'rato'
console.log(`Utilizando slice: ${umaString.slice(-5)}`); // Retorna 'Roma.'
console.log(`Utilizando slice: ${umaString.slice(-5, -1)}`); // Retorna 'Roma'

console.log(''); // Pula uma linha

// Utilizando substring
// substring: função utilizada para retornar uma parte da string
console.log(`Utilizando substring: ${umaString.substring(umaString.length - 5, umaString.length - 1)}`); // Retorna 'Roma'
console.log(`Utilizando substring: ${umaString.substring(umaString.length - 5)}`); // Retorna 'Roma.'

console.log(''); // Pula uma linha

// Utilizando split
// split: função utilizada para retornar um array com as palavras separadas por espaço
console.log(`Utilizando split: ${umaString.split(' ')}`); // Retorna um array com as palavras separadas por espaço
console.log(`Utilizando split: ${umaString.split(' ', 2)}`); // Retorna um array com as duas primeiras palavras separadas por espaço

console.log(''); // Pula uma linha

// Utilizando toLowerCase
// toLowerCase: função utilizada para retornar a string em minúsculo
console.log(`Utilizando toLowerCase: ${umaString.toLowerCase()}`); // Retorna a string em minúsculo

console.log(''); // Pula uma linha

// Utilizando toUpperCase
// toUpperCase: função utilizada para retornar a string em maiúsculo
console.log(`Utilizando toUpperCase: ${umaString.toUpperCase()}`); // Retorna a string em maiúsculo