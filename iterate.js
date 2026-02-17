const testScores = {
    Kelian: 98,
    John: 95,
    Sarah: 88,
    Mike: 0,
    Emily: 100,
    David: 55,
    Lisa: 34,
    Tom: 91,
    Anna: 64,
    James: 90
};
// for (let student in testScores) {
//     console.log(`${student}: ${testScores[student]}`);
// }

let total =0;
let scores = Object.values(testScores);
for (let score of Object.values(testScores)) {
    total += score;
    console.log(total);
}
