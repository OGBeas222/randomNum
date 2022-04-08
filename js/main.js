let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let answerUser = document.querySelector('.answers-user');
console.log(answerUser);
let userGuess = Number(input.value);

const resetParas = document.querySelectorAll('.resultParas p');
const space = '';
let Guesses = 10;
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 1;
const isResizeble = false;

function setGameOver() {
    // input.disabled = true;
    // btn.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
    answerUser.textContent += userGuess + ' ';
    console.log(guessCount);
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

function checkGuess() {
    let userGuess = Number(input.value);
    if (guessCount === 1) {
        answerUser.textContent = 'Previous guesses: ';
    }
    answerUser.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        // setGameOver();
        // input.disabled = true;
        // btn.disabled = true;
        alert('Great, You win this game');
        if(!isResizeble) {
            resetButton = document.createElement('button');
            resetButton.textContent = 'Start new game';
            document.body.appendChild(resetButton);
            resetButton.addEventListener('click', resetGame);
            answerUser.textContent += userGuess + ' ';
            isRezeble = true;
        }
    } else if (guessCount === Guesses - 1) {
        alert('We added one chance')
        Guesses  =  Guesses + 1;
        guessCount  =  guessCount + 1;
        console.log(guessCount);
    } else if (guessCount === Guesses || guessCount == 11)  {
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();

    } else if (guessCount <= 11) {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }

    guessCount++;
    input.value = '';
    // input.focus();
}

function resetGame() {
    guessCount = 1;
    resetText ();
    resetButton.parentNode.removeChild(resetButton);
    input.disabled = false;
    btn.disabled = false;
    input.value = '';
    input.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

console.log(randomNumber);

function resetText (){
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = space ;
    }
    setTimeout(() => answerUser.textContent = 'Previous guesses: ', 0);
}

btn.addEventListener('click', checkGuess);

