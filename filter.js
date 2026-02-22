const exams = [80, 98, 92, 78, 77, 90, 89];
// exams.every(score => score >= 75);

exams.some(score => score >= 75);









const numbers = [1, 2, 3, 4, 5, 6];
numbers.filter(n => {
    return n === 4
})

movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
        
    },
    {
        title: 'The Godfather',
        score: 95,
        year: 1972      

    },
    {
        title: 'The Godfather: Part II',
        score: 97,  
        year: 1974
    }                       
]

const goodMovies = movies.filter(m => m.score > 95);
const goodTitles = goodMovies.map(m => m.title);
console.log(goodTitles);

movies.some(movie => movie.year > 2015)