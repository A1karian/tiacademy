var nome = prompt("Digite seu nome");
document.write("Seja bem vindo(a)...:" + nome + "<br/>");

var numero = prompt(nome+ " digite um número para comparar com 'n'");
document.write("Você digitou o número..:(" + numero + ")<br/>");

var valor1 = parseInt('20');
var valor2 = 20;

var bool = valor1 == valor2;
document.write("O retorno da comparação booleana é...:" + bool + "<br/>");
console.log(bool);

var soma = valor1 + valor2;
document.write("A soma dos valores é...:" + soma + "<br/>");
console.log(soma);

var sub = valor1 - valor2;
document.write("A subtração dos valores é...:" + sub + "<br/>");
console.log(sub);

var resto = valor1 % valor2;
document.write("O resto da divisão é de...:" + resto + "<br/>");
console.log(resto);

var quadrado = valor1 ** 2;
document.write("O quadrado do número digitado é...:" + quadrado + "<br/>");
console.log(quadrado);


