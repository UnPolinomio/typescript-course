"use strict";
var phone = 1234567890;
var phoneNumber = 123456789;
var hex = 0x9ab;
var binary = 10;
var octal = 124;
var isSomebody;
isSomebody = false;
var isDog = true;
var username = 'Hector';
username = "Hector F.";
var userInfp = "\n    Info\n    My name is " + username + "\n";
var something = '1234';
something = 1234;
something = true;
function isAFunction(something) {
    console.log('Hello wolrd');
}
var unusable;
unusable = undefined;
function throwError() {
    throw Error('Some error');
}
function infiniteLoop() {
    var sum = 0;
    while (true) {
        sum++;
    }
}
var nullVariable = null;
var undefinedVariable = undefined;
var user = {
    id: 1234,
    username: 'Hector',
    myName: true,
};
var user2 = {
    id: 1234,
    username: 'Hector',
    myName: true,
};
var users = ['Hector', 'Franco'];
var someArray = ['Hello', 1, false];
var aTuple = [12, 'Foo'];
var anotherTuple = [[1, 'one'], [2, 'two']];
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
