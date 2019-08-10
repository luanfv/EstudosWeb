// TRABALHANDO COM ARRAY NO ES6
const array = [1, 2, 6, 9]

export function map(){
    // percorre todo array e retorna a logica determinada dentro da função
    const newArray = array.map(function(valor){
        return valor * 2
    })

    console.log(array, newArray) // [1, 2, 6, 9], [2, 4, 12, 18]
}

export function reduce(){
    // pega o valor atual e o proximo e retorna o que for determinado na logica
    const totalArray = array.reduce(function(total, proximo){
        return total + proximo
    })

    return totalArray // 18 = 1 + 2 + 6 + 9
}

export function filter(){
    // retorna apenas o que derem o resultado verdadeiro
    const filter = array.filter(function(valor){
        // retornar apenas os pares
        return valor % 2 == 0
        // return valor == 9 retornaria apenas os valores 9 por exemplo
    })

    console.log(filter) // [2, 6]
}