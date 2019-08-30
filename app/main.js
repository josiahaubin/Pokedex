import ValuesController from "./Controllers/ValuesController.js";


class App {
    constructor() {
        this.controllers = {
            valuesController: new ValuesController()
        }
    }
}

window['app'] = new App()