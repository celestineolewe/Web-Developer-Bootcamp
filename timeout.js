console.log('This will be printed immediately.');
setTimeout(() => {
    console.log('Hello, World!');
}, 2000);
console.log("Goodbye, World!");


const Id = setInterval(() => {
    console.log(Math.random());
}, 2000);

