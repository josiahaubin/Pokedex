import PokeService from "../Services/PokeService.js";

//Private
let _pokeService = new PokeService()

function _drawAllApiPokemon() {
    let template = `<ul>`
    let apiPoke = _pokeService.apiPokemon

    apiPoke.forEach(p => {
        template += `<li>${p.name}</li>`
    })

    document.getElementById('api-pokemon').innerHTML = template + `</ul>`
}


//Public
export default class PokeController {
    constructor() {
        //NOTE Register all subscribers
        _pokeService.addSubscriber("apiPokemon", _drawAllApiPokemon)

        //NOTE Retrieve data
        _pokeService.getAllApiPokemon()
    }
}