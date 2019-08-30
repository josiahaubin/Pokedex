import Pokemon from "../Models/Pokemon.js";

// @ts-ignore
let _pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

// @ts-ignore
let _sandBoxApi = axios.create({
    baseURL: "http://bcw-sandbox.herokuapp.com/api/Josiah/pokemon"
})

//Private
let _state = {
    apiPokemon: [],
    currentPokemon: {},
    myPokemon: []
}

//NOTE methods to run when a given property in state changes
let _subscribers = {
    apiPokemon: [],
    currentPokemon: [],
    myPokemon: []
}

function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}

//Public
export default class PokeService {
    //NOTE adds the subscriber function to the array based on the property it is watching
    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    //Getters
    get apiPokemon() {
        return _state.apiPokemon
    }

    get currentPokemon() {
        return new Pokemon(_state.currentPokemon)
    }

    //End Getters

    selectPokemon(name) {
        _pokeApi.get(name)
            .then(res => {
                let pokemon = new Pokemon(res.data)
                _setState("currentPokemon", pokemon)
            })
            .catch(err => {
                console.error(err);
            })
    }

    //Poke API Calls
    getAllApiPokemon() {
        _pokeApi.get()
            .then(res => {
                console.log(res.data.results);
                _setState("apiPokemon", res.data.results)
            })
            .catch(err => {
                console.error(err);
            })
    }
}
