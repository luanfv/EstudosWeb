/*
//Importando uma função
import { desestruturacao } from './desestruturacao'
desestruturacao()

//Importando mais de uma função e renomeando com as
import  {filter, map as mp, reduce} from './array' 
filter()
mp()
console.log(reduce())

//Importando todas funções e colocando dentro de uma variavel, assim, criando um objeto
import * as restSpread from './rest_spread'

restSpread.restExemplo()
restSpread.spreadExemplo()

//Importando por default
import classe from './classes'
const c = new classe()
c.addToto()
*/

import { umPorSegundo, getUserGitHub, buscarUsuario } from './pratica_async_axios'

async function ordem(){
    console.log(buscarUsuario("Luanfv"))
    await umPorSegundo()
    await getUserGitHub()
}
ordem()