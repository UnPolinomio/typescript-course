class Animal {
    _id: number;
    protected _name: string;
    // public noSecret = 'Hello, world';
    // private secret = 'Hello, world';
    // readonly secret = 'Hello, world';
    // #secret = 'Hello, world'; // New syntax, hides this attribute from instances

    constructor(id: number, name: string){
        this._id = id
        this._name = name
    }
    toString(): string {
        return `${this._id} - ${this._name}`
    }

    get name() {
        return this._name
    }
    set name(newName: string) {
        this._name = newName
    }
}

class Pig extends Animal {
    constructor(id: number) {
        super(id, 'My Pig')
    }
    toString() {
        return this._name
    }
}

let myAnimal = new Pig(12)
console.log(myAnimal.toString())