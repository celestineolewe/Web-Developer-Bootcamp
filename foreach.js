// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//     console.log(el);
// }})

// for (let el of numbers) {
//     console.log(el);
// }

const movies = [
    { title: 'The Shawshank Redemption', rating: 9.3 },
    { title: 'The Godfather', rating: 9.2 },
    { title: 'The Dark Knight', rating: 9.0 },  ]
    movies.forEach(function (movie) {
        console.log(`${movie.title} has a rating of ${movie.rating}`);
    })