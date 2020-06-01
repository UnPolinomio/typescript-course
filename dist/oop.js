"use strict";
var Animal = (function () {
    function Animal(id, name) {
        this._id = id;
        this._name = name;
    }
    Animal.prototype.toString = function () {
        return this._id + " - " + this._name;
    };
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var myAnimal = new Animal(12, 'Pedro');
