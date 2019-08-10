// DESESTRUTURAÇÃO
export function desestruturacao(){
    const usuario = {
        nome: 'Luan',
        idade: 19,
        endereco: {
            cidade: 'Pelotas',
            estado: 'RS'
        }
    }

    const { nome, idade, endereco: { cidade }} = usuario

    console.log(nome, idade, cidade)
}