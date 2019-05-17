function operacoes(n1, n2, tipo){
    if(tipo == 1){
        return (parseInt(n1) + parseInt(n2));

    } else if(tipo == 2) {
        return (parseInt(n1) - parseInt(n2));
    
    } else {
        return "Operação inválida!!";
    }
}

var numero1 = prompt("Informe um numero: ");
var numero2 = prompt("Informe um segundo numero: ");
var operacao = prompt("Defina a operação: (1-Soma / 2-Subtração");

alert(operacoes(numero1, numero2, operacao));