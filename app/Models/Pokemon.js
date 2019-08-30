export default class Pokemon {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}