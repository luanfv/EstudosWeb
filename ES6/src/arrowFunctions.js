 // ARROW FUNCTIONS
export function arrowFunction(){ 
    // maneira alternativa de fazer funções que tem apenas o retorno como logica
    const arrayFunction = array.map(valor => valor * 2)
    console.log(arrayFunction)

    // função menos verbosa
    const teste1 = () => 6
    console.log(teste1()) // 6

    const teste2 = () => ({ nome: 'Luan', sexo: 'M'})
    console.log(teste2()) // {nome: 'Luan', sexo: 'M'}
}