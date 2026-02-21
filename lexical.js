// function bankRobbery() {
//     const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Deadpool'];

//     function cryForHelp() {
//         function inner() {
//             for (let hero of heroes) {
//                 console.log(`PLEASE HELP US, ${hero.toUpperCase()}!`);
//             }  
//         } 
//         inner(); // <--- Add this call to execute the loop!
//     }

//     cryForHelp();
// }

// bankRobbery(); // Execute the main function

// function callTwice(func) {
//     func();
//     func();
// }
// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f();
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1;
//     console.log(roll);
// }
// callTwice(rollDie);

// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function() {
//             console.log('Congrats, I am a good function!');
//             console.log('You win a million dollars!');
            
//     } else {
//         return function() {
//             console.log('Haha, I am a bad function!');
//             console.log('You have been infected by a computer virus!'); 


//             }
//         }
//     }

//             }
function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }       

// function isBetween(num) {
//     return num >= 50 && num <= 100;

// }
// function isBetween2(num) {
//     return num >= 50 && num <= 10;

// 