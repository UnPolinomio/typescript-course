// Interfaces
type EyesColor = 'blue' | 'green' | 'black'

interface Human {
    readonly name: string,
    age: number,
    eyesColor?: EyesColor // Optional
}

function showHumanInfo(human: Human) {
    console.log(`
    My name is ${human.name},
    I'm ${human.age} years old.
    ${human.eyesColor ? `My eyes are ${human.eyesColor}` : ''}
    `)
}
showHumanInfo({
    name: 'Hector',
    age: 15,
    // eyesColor: 'green'
})

// Extend interfaces
enum Power {
    invisibility,
    fly
}
interface SuperHuman extends Human {
    power: Power
}