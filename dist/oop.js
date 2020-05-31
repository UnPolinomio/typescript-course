"use strict";
var Animal = (function () {
    function Animal(id, name) {
        this.id = id;
        this.name = name;
    }
    Animal.prototype.toString = function () {
        return this.id + " - " + this.name;
    };
    return Animal;
}());
var myAnimal = new Animal(12, 'Pedro');
