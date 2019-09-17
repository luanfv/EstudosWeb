import axios from 'axios'

export default class Api {
    async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`)
            return response
        }
        catch(error){
            console.warn('Erro na API, username passado não encontrado!')
            return null
        }
    }
}