alert("Hello")

// EXEMPLO DE CLASSE
class TodoList{
    constructor(){
        this.list = []
    }

    addToto(){
        this.list.push("NOVO TODO")
        console.log(this.list)
    }
}

const list = new TodoList()

// TRABALHANDO COM ARRAY NO ES6
// percorre todo array e retorna a logica determinada dentro da função
const array = [1, 2, 6, 9]
const newArray = array.map(function(valor){
    return valor * 2
})

console.log(array, newArray) // [1, 2, 6, 9], [2, 4, 12, 18]

// pega o valor atual e o proximo e retorna o que for determinado na logica
const totalArray = array.reduce(function(total, proximo){
    return total + proximo
})

console.log(totalArray) // 18 = 1 + 2 + 6 + 9

// retorna apenas o que derem o resultado verdadeiro
const filter = array.filter(function(valor){
    // retornar apenas os pares
    return valor % 2 == 0
    // return valor == 9 retornaria apenas os valores 9 por exemplo
})

console.log(filter) // [2, 6]

// ARROW FUNCTIONS
// maneira alternativa de fazer funções que tem apenas o retorno como logica
const arrayFunction = array.map(valor => valor * 2)
console.log(arrayFunction)

// função menos verbosa
const teste1 = () => 6
console.log(teste1()) // 6

const teste2 = () => ({ nome: 'Luan', sexo: 'M'})
console.log(teste2()) // {nome: 'Luan', sexo: 'M'}