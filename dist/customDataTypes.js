"use strict";
function showHumanInfo(human) {
    console.log("\n    My name is " + human.name + ",\n    I'm " + human.age + " years old.\n    " + (human.eyesColor ? "My eyes are " + human.eyesColor : '') + "\n    ");
}
showHumanInfo({
    name: 'Hector',
    age: 15,
});
var Power;
(function (Power) {
    Power[Power["invisibility"] = 0] = "invisibility";
    Power[Power["fly"] = 1] = "fly";
})(Power || (Power = {}));
