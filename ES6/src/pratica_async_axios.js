import axios from 'axios'

export async function umPorSegundo(){
    const delay = () => new Promise (resolve => setTimeout(resolve, 1000))

    for(var i = 1; i <= 10; i++){
        console.log(i)
        await delay()
    }
}

export async function getUserGitHub(username){
    const user = await axios.get(`https://api.github.com/users/${username}`)
    console.log(user.data)
}

export const buscarUsuario = async (usuario) => {
    try{
        const user = await axios.get(`https://api.github.com/users/${usuario}`)
        return user.data
    }
    catch{
        console.warn("Usuario não encontrado!")
        return
    }
}