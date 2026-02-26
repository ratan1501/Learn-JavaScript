/* prototype */

class Game {
    constructor() {
        this.name = "xyz"
        this.price = 9999
    }
}

Game.prototype.play = function () {
    console.log("play");
}
Game.prototype.end = function () {
    console.log("end");
}

let h1 = new Game();
let h2 = new Game();
