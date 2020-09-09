var booleana = true;
console.log(booleana);

booleana = false;
console.log(booleana);
console.log(typeof(booleana));

booleana = !booleana;
console.log(booleana);

//----------------------

var numero = 1;
console.log(numero);
console.log(typeof(numero));

numero = -1;
console.log(numero);
console.log(typeof(numero));

numero = Math.PI;
console.log(numero);
console.log(typeof(numero));

var n1 = 10;
var n2 = 20;
console.log('Soma = ', n1 + n2);
console.log('Subtração = ', n1 - n2);
console.log('Multiplicação = ', n1 * n2);
console.log('Divisão = ', n1 / n2);
console.log('Potência n1 elevado a n2 = ', Math.pow(n1, n2));
console.log('Raiz quadrada de 25 = ', Math.sqrt(25));

var pi = Math.PI;
var numeroRandomico = Math.random()*100;

console.log('Número randômico até 100 : ', numeroRandomico);
console.log('Número randômico até 100 : ', Math.floor(numeroRandomico));
console.log('Número randômico até 100 : ', Math.trunc(numeroRandomico));
console.log('Número randômico até 100 : ', Math.round(numeroRandomico));
//-----------------------

var texto = 'texto texto texto';
console.log(texto);
console.log(typeof(texto));

texto = 'c';
console.log(texto);
console.log(typeof(texto));

texto = 'texto texto texto';
console.log(texto);
console.log(typeof(texto));

console.log(texto.toUpperCase());
console.log(texto.toLocaleLowerCase());
console.log(texto.trim());

texto = 'texto';
console.log(texto.startsWith('tex'));
console.log(texto.endsWith('to'));

console.log(texto.search('x'));
console.log(texto.search('a'));

console.log(texto.indexOf('x'));
console.log(texto.indexOf('a'));

console.log(texto.includes('x'));
console.log(texto.includes('a'));

console.log(texto.charAt(0));
console.log(texto.charAt(1));

console.log(texto.concat(' Texto'));

