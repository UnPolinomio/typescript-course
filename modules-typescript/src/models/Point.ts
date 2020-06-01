import Color from "./Color"
import Coordinate from "./Coordinate"

export default class Point extends Coordinate {
    color: Color

    constructor (x: number, y: number, color: Color) {
        super(x, y)
        this.color = color
    }

    static getDistance(pointA: Point, pointB: Point) {
        return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2))
    }

    distanceTo(point: Point) {
        return Point.getDistance(this, point)
    }
}