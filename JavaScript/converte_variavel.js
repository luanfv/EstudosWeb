var nome = prompt('Informe seu nome: ');
var altura = prompt('Informe sua altura em centimetros: ');
var peso = prompt('Informe seu peso: ');

//parseFloat -> converte a variavel para float (parseInt para inteiro )
//toString -> para string (aplicação = variavel.toString())
peso = parseFloat(peso);
altura = parseFloat(altura / 100);

var massa_corporal = peso / (altura * altura);