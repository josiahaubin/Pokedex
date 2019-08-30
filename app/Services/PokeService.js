import Pokemon from "../Models/Pokemon.js";

// @ts-ignore
let _pokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon"
})
//Private
let _state = {

}

//NOTE methods to run when a given property in state changes
let _subscribers = {

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
}
