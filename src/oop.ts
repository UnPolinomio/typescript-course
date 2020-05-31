class Animal {
    id: number;
    name: string;
    // public noSecret = 'Hello, world';
    // private secret = 'Hello, world';
    // readonly secret = 'Hello, world';
    // #secret = 'Hello, world'; // New syntax, hides this attribute from instances

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
    toString(): string {
        return `${this.id} - ${this.name}`
    }
}
let myAnimal = new Animal(12, 'Pedro')