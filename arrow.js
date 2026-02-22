// const add = (x, y) => {
//     return x + y;
// }

// const square = (num) => {
//     return num * num;
// }
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

movies = [
    { title: 'The Shawshank Redemption', rating: 9.3 },
    { title: 'The Godfather', rating: 9.2 },
    { title: 'The Dark Knight', rating: 9.0 },  ]   
    
// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.rating}`
// })
const newMovies = movies.map(movie => (`${movie.title} - ${movie.rating / 10}`));