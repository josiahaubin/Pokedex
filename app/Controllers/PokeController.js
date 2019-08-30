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

function _drawMyPokemon() {
    let template = `<ol>`
    let myPoke = _pokeService.myPokemon

    myPoke.forEach(p => {
        template += `<li onclick="app.controllers.pokeController.activeMyPokemon('${p._id}')">${p.name}</li>`
    })

    document.getElementById('my-pokemon').innerHTML = template + `</ol>`
}


//Public
export default class PokeController {
    constructor() {
        //NOTE Register all subscribers
        _pokeService.addSubscriber("apiPokemon", _drawAllApiPokemon)
        _pokeService.addSubscriber("currentPokemon", _drawCurrentPokemon)
        _pokeService.addSubscriber("myPokemon", _drawMyPokemon)

        //NOTE Retrieve data
        _pokeService.getAllApiPokemon()
        _pokeService.getMyPokemon()
    }

    selectPokemon(name) {
        _pokeService.selectPokemon(name)
    }
    catch() {
        _pokeService.catch()
    }
    activeMyPokemon(id) {
        _pokeService.active(id)
    }
    releasePokemon() {
        _pokeService.releasePokemon()
        document.getElementById('current-pokemon').innerHTML = ''
    }
}