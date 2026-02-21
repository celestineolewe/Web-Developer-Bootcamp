// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14;
//     let msg = 'HIIII'
// }
// console.log(radius); // 8
// console.log(PI); // ReferenceError: PI is not 
// console.log(msg); // ReferenceError: msg is not defined

for (let i = 0; i < 5; i++) {
    // let msg = 'HIIII'; they only existt inside the curly braces
    console.log(msg); 
}
console.log(msg); // ReferenceError: msg is not defined 
console.log(i); // ReferenceError: i is not defined