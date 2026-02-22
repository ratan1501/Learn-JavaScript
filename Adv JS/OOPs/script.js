// /* class & constructor */

// class Game {
//     constructor(name, price, developer) {
//         this.name = name;
//         this.price = price;
//         this.developmentStudios = developer;
//     }

//     gamelevel() {}
//     drive() {}
// }

// let g1 = new Game("Forza Horizon 6", 9699, "Microsoft")
// let g2 = new Game("Grand Theft Auto VI", 5999, "Rockstar Games")
// let g3 = new Game("EA Sports FC 25", 4999, "Electronic Arts")
// let g4 = new Game("Call of Duty: Black Ops 6", 6999, "Activision")
// let g5 = new Game("Assassin's Creed Shadows", 5499, "Ubisoft")

// /* prototype */

// class Game {
//     constructor() {
//         this.name = "xyz"
//         this.price = 9999
//     }
// }

// Game.prototype.play = function () {
//     console.log("play");
// }
// Game.prototype.end = function () {
//     console.log("end");
// }

// let h1 = new Game();
// let h2 = new Game();


// call

let obj = {
    name: "Ratan",
};

function abc() {
    console.log(this);
}

abc.call(obj)

// apply

function abc(a, b, c) {
    console.log(this);
}

abc.apply(obj, [1, 2, 3])

// bind

function abc(a, b, c) {
    console.log(this);
}

let newfn = abc.bind(obj, 1, 2, 3)