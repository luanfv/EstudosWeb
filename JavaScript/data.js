/*
//Criando uma variavel do tipo data
var data = new Date();

//Mostrando a data atual por partes
document.write(data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear() + "  " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds() + "<br>");
document.write("<hr>");

//Mostrando toda data
document.write(data.toString());
document.write("<hr>");

//Modificando os dias da data guardada na variavel
data.setDate(data.getDate() - 365);
document.write(data.toString());
document.write("<hr>");

//Modificando o mes
data.setMonth(data.getMonth() - 4);
document.write(data.toString());
document.write("<hr>");

//Modificando o ano
data.setFullYear(data.getFullYear() + 1);
document.write(data.toString());
document.write("<hr>");
*/

var data1 = new Date(2020, 3, 1);
var data2 = new Date(2020, 3, 9);

//Transforma a data em miles segundos (contando apartir de 1970)
var milessegundos = data2.getTime() - data1.getTime();

//Conversão de miles segundos para dias 
var dias = milessegundos / (24*60*60*1000);



document.write(data1.getDate() + "/" + (data1.getMonth() + 1) + "/" + data1.getFullYear() + " ate " + data2.getDate() + "/" + (data2.getMonth() + 1) + "/" + data2.getFullYear());
document.write(" tem " + dias + " dias");