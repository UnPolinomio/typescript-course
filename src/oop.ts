class Animal {
    private _id: number;
    private _name: string;
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
let myAnimal = new Animal(12, 'Pedro')