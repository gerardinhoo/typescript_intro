"use strict";
exports.__esModule = true;
// boolean
var togolese = true;
// number
var age = 10;
// string
var fruit = "orange";
// array
var items = ["pen", "water", "ball"];
// object
var sport = {
    first: "soccer",
    second: "basketball"
};
// null and undefined
var score = undefined;
var money = null;
// tuple
var team;
team = ["Madrid", "Spain"];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
// Any ----Be careful using it!!!!!!!!
var something = "nooooo!!!";
something = "";
// void
var sing = function () {
    console.log("hey");
};
// never
var error = function () {
    throw Error("ohhh!");
};
var fightRobotArmy = function (robots) {
    console.log("Fight!");
};
// Same thing as thr above code
var fightRobotArmy2 = function (robots) {
    console.log("Fight!");
};
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) {
    console.log("heyyy");
};
var fightRobotArmy4 = function (robots) {
    console.log("heyy");
    return 4;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "lalalaa";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hi " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("hahah");
lion.sing;
// Union
var confused = 5;
