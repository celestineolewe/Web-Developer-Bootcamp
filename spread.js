const cats = ['Milo', 'Otis', 'Garfield'];
const dogs = ['Rover', 'Sparky', 'Fido'];
const allPets = [...cats, ...dogs];


const feline = {legs: 4, family: 'Felidae'};
const canine = {isFurry: true, family: 'Caninae'};

const catDog = {...feline, ...canine};

const dataFromForm = {
    email: 'user@example.com', 
    password: 'supersecret',
    username: 'John Doe'
}
const newUser = {...dataFromForm, id: 1, isAdmin: false};


// function sum() {
//    return arguments.reduce((total, el) => total + el);
// }

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el);
// }  

function raceResults(gold, silver, bronze, ...everyoneElse) {
    console.log(`Gold goes to: ${gold}`);
    console.log(`Silver goes to: ${silver}`);
    console.log(`Bronze goes to: ${bronze}`);
    console.log(`And thanks to everyone else who participated: ${everyoneElse}`);   
}