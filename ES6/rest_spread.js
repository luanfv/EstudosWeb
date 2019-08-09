const array1 = [1, 2, 3, 4]
const array2 = [5, 6, 7, 8]

// REST
export function restExemplo(){
    const pessoa = {
        sexo: 'M',
        idade: 19,
        alutra: 1.65
    }
    const { sexo, ...resto } = pessoa
    console.log(sexo, resto)

    const [a, b, ...c] = array1;
    console.log(a, b, c)

    function soma(a, ...params){
        return params.reduce((total, next) => total + next) - a
    }
    console.log(soma(1, 2, 3))
}

// SPREAD
export function spreadExemplo(){
    const array3 = [...array1, ...array2]
    console.log(array3)

    const usuario1 = {
        nome: "Gerald",
        idade: 37
    }

    const usuario2 = {...usuario1, idade: 49}
    console.log(usuario1, usuario2)
}