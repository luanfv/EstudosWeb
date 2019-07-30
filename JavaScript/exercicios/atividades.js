var container = document.querySelector("div #ul")
var buttonElement = document.querySelector("#button")
var inputElement = document.querySelector("#input")

//pega o valor em JSON
var lista = JSON.parse(localStorage.getItem("lista_atividades")) || []

buttonElement.onclick = addList

//adiciona o value passado por input na lista
function addList(){
    if(inputElement.value == ''){
        return;
    }

    lista.push(inputElement.value)

    viewList()
    inputElement.value = ''
}

//mostra a lista
function viewList(){
    //remove tudo que há dentro da tag html
    container.innerHTML = ''

    for(l of lista){
        //atividade
        var atividadeElement = document.createElement("li")
        var novaAtividade = l
        
        //remove
        var excluir = document.createElement("a")
        excluir.setAttribute("href", "#")
        excluir.appendChild(document.createTextNode("Excluir"))
        //descobre a posição separadamente de cada atividade e possibilita sua exclusão
        var posicao = lista.indexOf()
        excluir.setAttribute("onclick", "removeList(" + posicao + ")")

        //implementa
        var nomeAtividade = document.createTextNode(novaAtividade)
        atividadeElement.appendChild(nomeAtividade)
        atividadeElement.appendChild(excluir)
        container.appendChild(atividadeElement)
    }
    saveList()
}

//renova atividade atraves da posicao
function removeList(posicao){
    lista.splice(posicao, 1)
    viewList()
}

//salva a lista localmente
function saveList(){
    //passa para JSON
    localStorage.setItem("lista_atividades", JSON.stringify(lista))
}

viewList()