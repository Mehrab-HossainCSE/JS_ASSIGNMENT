
function calculateAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}


const johnScores = [89, 120, 103];
const mikeScores = [116, 94, 123];
const maryScores = [97, 134, 105];


const johnAverage = calculateAverage(johnScores);
const mikeAverage = calculateAverage(mikeScores);
const maryAverage = calculateAverage(maryScores);

let winner;
let winnerAverage;

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
    winner = 'John';
    winnerAverage = johnAverage;
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
    winner = 'Mike';
    winnerAverage = mikeAverage;
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    winner = 'Mary';
    winnerAverage = maryAverage;
} else {

    winner = 'Draw';
    winnerAverage = johnAverage; 
}


console.log(`Winner: ${winner}, Average Score: ${winnerAverage}`);//Winner: Mary, Average Score: 112