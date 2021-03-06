// Number
let phone: number = 1234567890;
let phoneNumber = 123456789

let hex = 0x9ab;
let binary: number = 0b1010;
let octal = 0o174

// Boolean
let isSomebody: boolean;
isSomebody = false;

let isDog = true;

// String
let username: string = 'Hector'
username = "Hector F."

// Template String
let userInfp = `
    Info
    My name is ${username}
`

// Any
let something: any = '1234';
something = 1234
something = true;

// Void
function isAFunction(something: string): void {
    console.log('Hello wolrd')
}

let unusable: void;
unusable = undefined;

// Never (Functions throwing errors and infinite loops)
function throwError(): never {
    throw Error('Some error')
}

function infiniteLoop(): never {
    let sum = 0;
    while(true) {
        sum++
    }
}

// Null
let nullVariable: null = null;

// Undefined
let undefinedVariable: undefined = undefined;

// Object
let user: object = {
    id: 1234,
    username: 'Hector',
    myName: true,
} // Items are private

let user2 = {
    id: 1234,
    username: 'Hector',
    myName: true,
} // Items are public

// Array
let users: string[] = ['Hector', 'Franco']
let someArray: Array<any> = ['Hello', 1, false]

// Tuples
let aTuple: [number, string] = [12, 'Foo']
let anotherTuple: [number, string][] = [[1, 'one'], [2, 'two']]
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// Enum
enum SomePosition {
    x,
    y,
}
const XPos: SomePosition = SomePosition.x

enum Countries {
    Mexico = 'MX',
    Colombia = 'CO',
}
const myCountry = Countries.Mexico

// Union
let someValue: string | number = 1
someValue = '1'

let multipleArray: (string | number)[] = [1, '2', 3]

// Types alias
type IdUser = string | number
type Username = string
function getUsernameById(id: IdUser): Username {
    // ...
    return 'Foo'
}

// Literal types
type Angle = 'pi' | '2pi' | '3pi'
let myAngle: Angle = 'pi'

// Assertions (Not casted to string)
let userName: any = 'Hector'
let isNotEmpty = (<string>username).length > 0
let isNotEmpty2 = (username as string).length > 0