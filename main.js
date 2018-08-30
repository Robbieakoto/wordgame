window.addEventListener('load', init)

const levels = {
    Easy: 5,
    Medium: 4,
    Hard: 3
}
const changeLevel = levels.Easy;

let time = changeLevel;
let score = 0;
let userPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'bath',
    'food',
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
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'lighthening',
    'python',
    'congratulations',
    'unleash',
    'resign',
    'fabolous'

];

function init() {
    showWord(words);
    wordInput.addEventListener('input', match)
    setInterval(countDown, 1000);
    setInterval(checkStatus, 50)
}

let match = function() {
    if (matchWords()) {
        userPlaying = true;
        time = changeLevel + 1;
        showWord(words);
        wordInput.value == '';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }

}

let matchWords = function() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!';
        return true
    } else {
        message.innerHTML = '';
        return false;
    }
}
let showWord = function(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomIndex];
}

let countDown = function() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        userPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

let checkStatus = function() {
    if (!userPlaying && time === 0) {
        message.innerHTML = 'Game over!!!';
        score = -1;
    }
}