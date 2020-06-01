// Classes
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


// Abstract
abstract class Coordinate {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}
// let myCoordinate = new Coordinate(1, 1) // Error: Can't instance because it's abstract


// Static
class Point extends Coordinate {
    name: string;
    constructor(x: number, y: number, name?: string) {
        super(x, y)
        this.name = name ? name : ''
    }

    static getDistance(pointA: Point, pointB: Point) {
        return Math.sqrt(Math.pow(pointA.x - pointB.x,2) + Math.pow(pointA.y - pointB.y,2))
    } // Static method is called from Point. Not from an instance.

    distanceTo(point: Point) {
        return Point.getDistance(this, point)
    }
}