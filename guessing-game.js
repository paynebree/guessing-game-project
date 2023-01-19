//setting up readline environment
const { randomBytes } = require('crypto');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//active game code
let secretNumber;
let numAttempts = 5;
function askRange() {
    rl.question('Want to play a guessing game? ', answer0 => {
        let no = 'no'
    if (answer0.toLowerCase() === no) {
        console.log('okay boring');
        return rl.close();
    } else {
    rl.question('Enter a max number: ', answer1 => {
        let maxNum = Number(answer1);
        rl.question('Enter a min number: ', answer2 => {
            let minNum = Number(answer2);
            console.log("I'm thinking of a number between ", minNum, ' and ', maxNum, '...' );

        secretNumber = randomInRange(minNum, maxNum);

        function askGuess() {
            if (numAttempts === 0) {
                console.log('You lose!')
                return rl.close();
            }

            rl.question("Enter a guess: ", answer => {
            let numberAnswer = Number(answer);
            if (checkGuess(numberAnswer) === true) {
            console.log('You win!');
            rl.close();
            } else {
            numAttempts--
            console.log(checkGuess(numberAnswer))
            return askGuess();
        }
    })
}
askGuess();
                })
            })
        }
    })
};

//framework for setting secret number
function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//framework for how the game compares user input # to secret number
function checkGuess(number) {
    if (number > secretNumber) {
        return 'too high';
    } else if (number < secretNumber) {
        return 'too low';
    } else {
        return true;
    }
};

//must call the main func to start the game
askRange();
