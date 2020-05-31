class Animal {
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
    toString(): string {
        return `${this.id} - ${this.name}`
    }
}
let myAnimal = new Animal(12, 'Pedro').toString()
console.log(myAnimal.toString())