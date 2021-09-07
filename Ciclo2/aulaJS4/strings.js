/*var nome = "Bruno";

console.log(nome,length);
console.log(nome[0]);// B*/

/*match()
O método match procura uma palavra em uma string.
Existem alguns parâmetros de pesquisa que permite uma maior precisão conforme a 
flags g / i /m
*/

var palavras ="Maça doce";


console.log( palavras.match(/D/gi) );

/*search()
O método search() procura pela ocorrência e retornando a posição na
cadeia da string, a posição é em relação ao primeiro caractere da ocorrência.
*/

//console.log( palavras.search(/d/gi) );


/*replace()
Este método substitui uma string por outra, simples assim,
ele pesquisa a string informada, como no método "match" e a 
substitui por outra string nas aspas informada como segundo parêmetro
*/

/*var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consequuntur "+ 
"facere, in assumenda recusandae deserunt libero est deleniti voluptas quidem tempora";

var mudarStr = str.replace(/tempora/gi,'Xxxxxx');

console.log(mudarStr);
*/


/*localCompare( )
O método localeCompare compara efetua a comparação entre duas strings,
se estas forem iguais o retorno será "0" zero. Os valores -1 e 1 podem ser 
esperados caso elas não sejam iguais.
*/

/*var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();*/

//console.log(`Este é o c1: ${cs} Este é o c2 ${c2}`);

/*var comparacao = c1.localeCompare(/c2/gi);
console.log(comparacao);*/


/*trim()
Faz a remoção de espaços antes e depois da string especificada.
*/

var p = ' fpalavra+ ';

var r = p.trim();
console.log(r)
var s = r.replace(/f/gi,'');
console.log(s)
sub_a = s.replace('+',''); //remover e substituir o sinal de +
console.log(`Removido: ${sub_a}`);

//toLocaleString
// formatação de moedas
var valor = 1.357 // 1,35;
var formatarMoeda = valor.toLocaleSrring('pt-BR',{
	style: 'currency',
	currency:'BRL'
})

console.log(formatarMoeda);


