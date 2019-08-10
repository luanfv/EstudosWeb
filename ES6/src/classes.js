// EXEMPLO DE CLASSE
export default class TodoList{
    constructor(){
        this.list = []
    }

    addToto(){
        this.list.push("NOVO TODO")
        console.log(this.list)
    }
}