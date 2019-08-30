import PokeService from "../Services/PokeService.js";

//Private
let _pokeService = new PokeService()

function _drawAllApiPokemon() {
    let template = `<ol>`
    let apiPoke = _pokeService.apiPokemon

    apiPoke.forEach(p => {
        template += `<li onclick="app.controllers.pokeController.selectPokemon('${p.name}')">${p.name}</li>`
    })

    document.getElementById('api-pokemon').innerHTML = template + `</ol>`
}

function _drawCurrentPokemon() {
    document.getElementById('current-pokemon').innerHTML = _pokeService.currentPokemon.Template
}


//Public
export default class PokeController {
    constructor() {
        //NOTE Register all subscribers
        _pokeService.addSubscriber("apiPokemon", _drawAllApiPokemon)
        _pokeService.addSubscriber("currentPokemon", _drawCurrentPokemon)

        //NOTE Retrieve data
        _pokeService.getAllApiPokemon()
    }

    selectPokemon(name) {
        _pokeService.selectPokemon(name)
    }
}