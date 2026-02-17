const subreddits = ['cringe', 'books', 'chickens'];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`);
}

for ( let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`);
}

const seatingChart = [
    ['Harry', 'Hermione', 'Ron'],
    ['Draco', 'Luna', 'Cedric'],
    ['Ginny', 'Neville', 'Cho']
]
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}
for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for (let char of "hello world") {
    console.log(char);
}