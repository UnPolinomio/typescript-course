import Point from "./models/Point"
import Color from "./models/Color"

let origin = new Point(0, 0, Color.blue)
let userPoint = new Point(10, 10, Color.red)

console.log(
`Distance between oring and the point is:
${origin.distanceTo(userPoint)}`
)