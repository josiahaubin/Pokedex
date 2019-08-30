export default class Pokemon {
    constructor(data) {
        this._id = data._id
        this.name = data.name
        this.img = data.img || data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
    }

    get Template() {
        return `
            <div class="card">
                <img src="${this.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">Weight: ${this.weight} - Height: ${this.height}</p>
                    <button class="btn btn-success" onclick="app.controllers.pokeController.catch()">Catch Pokemon</button>
                </div>
            </div>
        `
    }
}