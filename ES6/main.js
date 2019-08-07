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