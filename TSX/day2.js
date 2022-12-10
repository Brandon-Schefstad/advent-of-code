/**
 * Rock: A      || X || 1 pt
 * Paper : B    || Y || 2 pts
 * Scissors : C || Z || 3 pts
 * Win: 6pts
 * Tie: 3pts
 * Loss:0pts
 *
 * totalScore = Sum of scores for each round
 * Score =
 */
var input = "A Y\n B X\n C Z\n ";
console.log(getScore(input));
function getScore(inputGames) {
    var gameArray = inputGames.split('\n');
    var gamesSubArrays = gameArray.map(function (game, index) {
        return index === 0 ? game.split(' ') :
            game.split(' ').slice(1);
    });
    var gamesSubArraysWithResults = gamesSubArrays.map(function (game) {
        switch (game[1]) {
            case 'X': // LOSING
                switch (game[0]) {
                    case 'A':
                        return 3; //Scissors
                    case 'B':
                        return 1;
                    case 'C':
                        return 2;
                    default:
                        break;
                }
            case 'Y': // Tie
                switch (game[0]) {
                    case 'A':
                        return 4;
                    case 'B':
                        return 5;
                    case 'C':
                        return 6;
                    default:
                        break;
                }
            case 'Z': // Win
                switch (game[0]) {
                    case 'A':
                        return 8;
                    case 'B':
                        return 9;
                    case 'C':
                        return 7;
                    default:
                        break;
                }
            default:
                return 0;
        }
    });
    var total = 0;
    var RPSScore = gamesSubArraysWithResults.reduce(function (current, acc) { return current + acc; }, total);
    return RPSScore;
}
