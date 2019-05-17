//length -> (string).lenght demonstra quantos espaços ocupa a String (cada letra ou espaço ocupa 1 no vetor)
document.write('Luan França Vieira'.length + "<br>");

//charAt demonstra o que ta guardado na posição que foi passando(lembrando que é um vetor e vetores começam no 0)
document.write('Luan França Vieira'.charAt(5) + "<br>");

var nome = 'Luan França Vieira';

document.write(nome.length + "<br>");

//replace -> substitui Strings, sintaxe: variavel.replace(String que vai ser modificar caso exista, String que vai substitui-la)
document.write(nome.replace('França', 'Nada') + "<br>");

//toLowerCase -> converte toda string para minusculo
document.write(nome.toLowerCase() + "<br>");

nome = "  " + nome + "       ";
document.write("-" + nome + "-" + "<br>");

// trim -> remove os espaços em brancos do inicio e fim da string
document.write("-" + nome.trim() + "-");