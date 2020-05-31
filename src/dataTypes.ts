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