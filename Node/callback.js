//retorna um objeto
function obterUsuario(callback){
    //Executa uma função apos uma condição ou tempo (função/variavel que executa por ultimo, função/condição/tempo antes de exercutar a proxima função)
    setTimeout(function(){
        return callback(false, { id: 1, nome: "Gerald", sexo: "M", telefone: null})
    }, 
    console.log("Executa isso antes do return"))

}

//retorna um objeto
function obterTelefone(callback){
    return callback(false, { numero: '123456'})
}

//retorna informações que são obtidas nas funções obterUsuario e obterTelefone
//Callback - 1° verifica se há erro, 2° executa o codigo
obterUsuario(function(erro, usuario){
    if(erro){
        console.log("DEU RUIM no USUARIO! ", erro);
        return
    }
    
    let telefone = obterTelefone(function(erroTel, telefone){
        if(erroTel){
            console.log("DEU RUIM no TELEFONE")
            return true
        }
        else {
            return telefone.numero
        }
    })

    console.log(usuario.nome, usuario.sexo, telefone)

})