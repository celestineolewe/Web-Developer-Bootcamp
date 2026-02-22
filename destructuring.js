// Destructuring array

// const scores = [90, 80, 70, 60, 50, 40, 30, 20, 10];
// const highScore = scores[0];
// const secondHighScore = scores[1];
// const [gold, silver, bronze, ...everyoneElse] = scores;


// Destructuring object
const user = {
    email: 'user@example.com',
    password: 'supersecret',
    username: 'John Doe',
    firstName: 'John',
    lastName: 'Doe',
    born: 1990,
    died: 2050,
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    city: 'New York',
    state: 'NY'
}
// const {email,firstName,lastName, bio, city} = user;


// Destructuring function parameters

function fullName({firstName = 'Celes', lastName='Auma'}) {  
    return `${firstName} ${lastName}`;
}
const movies = [
    {
        title: 'The Matrix',
        director: 'The Wachowskis',
        year: 1999,
        score: 87
    },
    {
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010,
        score: 86
    },
    {
        title: 'Interstellar',
        director: 'Christopher Nolan',
        year: 2014,
        score: 72
    }
]

// movies.filter((movie) => movie.score >= 85);
// movies.filter(({score}) => score >= 85);

movies.map(movie => {
    return `${movie.title} (${movie.year}) was rated ${movie.score}`;
})