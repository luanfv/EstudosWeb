var texto = 'HELLO WORLD, DE NOVO...';
var numero = 10;
var cinco = 5;

//prompt -> abre uma caixa de texto para ler uma informação e retorna string
var nome = prompt('Informe o seu nome: ');


//document.write -> mostra na tela os parametros que foram passados (é equivalente ao echo do php ou print do Java e C)
document.write(texto + ' AQUI É O '+ nome + ', AGORA É JAVASCRIPT NOTA ' + numero + '<br>');
document.write(cinco + ' + ' + cinco + ' = ' + (cinco + cinco));

//alert -> abre uma caixinha mostrando os parametros que foram passado
alert('EITA ' + nome);

//console.log -> mostra no console o parametro que foi passado (muito utilizado para achar erros)
console.log('eita');