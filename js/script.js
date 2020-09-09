window.alert('Calculadora em JavaScript');

var opcao = parseInt(window.prompt('Digite a operação desejada:\n1 - soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Potência'));
var numero1 = parseFloat(window.prompt('Digite o primeiro número'));
var numero2 = parseFloat(window.prompt('Digite o segundo número'));
var resultado;

switch(opcao){
    case 1: resultado = numero1 + numero2;
    window.alert('Resultado: ' + resultado);
    break;
    case 2: resultado = numero1 - numero2;
    window.alert('Resultado: ' + resultado);
    break;
    case 3: resultado = numero1 * numero2;
    window.alert('Resultado: ' + resultado);
    break;
    case 4: resultado = numero1 / numero2;
    window.alert('Resultado: ' + resultado);
    break;
    case 5: resultado = Math.pow(numero1,numero2);
    window.alert('Resultado: ' + resultado);
    break;
    default: window.alert('Opção Inválida');
}

