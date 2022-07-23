const levels = {
    easy: 5,
    medium: 3,
    hard: 2
};

const currentlevel = levels.easy;

let time = currentlevel;
let score = 0;
let isPlaying;


const currentWord = document.querySelector('.content .word');
const input = currentWord.nextElementSibling;
const timeDisplay = document.querySelector('.time-left span');
const scoreDisplay = document.querySelector('.score span');
const seconds = document.querySelector('.time');
const message = document.querySelector('.message');
const word = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'sibling',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'master',
    'space',
    'definition'
];

seconds.innerHTML = currentlevel;
timeDisplay.innerHTML = currentlevel;

window.addEventListener('load', () => {
    input.focus();
    playGame();
});

function playGame() {

    getWords();

    input.addEventListener('input', startMatch);
    setInterval(countDown, 1000);

    setInterval(getMessage, time);


};


function getWords() {
    const randomIndex = Math.floor(Math.random() * word.length)
    currentWord.innerHTML = word[randomIndex];
};

function countDown() {
    if (time > 0) {
        time--;
    } else {
        clearInterval();
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
};

function getMessage() {
    if (timeDisplay.innerHTML == 0) {
        message.innerHTML = ''
        message.innerHTML = "Game Over!!!";
        score = 0;
        scoreDisplay.innerHTML = score;
        getWords();
        input.value = '';
        time = currentlevel + 1;
    };
};

function startMatch() {
    if (input.value === currentWord.innerHTML) {
        
        score++;
        message.innerHTML = 'Correct!!!';
        input.value = '';
        getWords();
        scoreDisplay.innerHTML = score;
        time = currentlevel + 1;

    } else {
        message.innerHTML = '';
    }
};