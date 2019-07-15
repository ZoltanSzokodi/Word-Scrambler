const message = document.querySelector('.message');
const input = document.querySelector('input');
const button = document.querySelector('button');
const words_array = ['javascript', 'python', 'node.js', 'react', 'angular', 'preprocessor', 'compiler', 'webpack', 'babel', 'stringify', 'boolean', 'primitive', 'variable', 'recursion', 'closure', 'scope', 'function', 'bootcamp', 'internet', 'website', 'download', 'stack', 'document'];
let in_play = false;
let scramble = '';
let scrambled = '';
let guesses = 0;
let player_guess;

button.addEventListener('click', playGame);

function playGame() {
    if (!in_play) {
        in_play = true;
        input.value = '';
        guesses = 0;
        button.innerHTML = "Guess";
        input.classList.remove("hidden");
        scramble = createWord();
        scrambled = randomArray(scramble.split('')).join('');
        message.innerHTML = `<p>${scrambled}</p>`;
    } else {
        guess();
    }
}

function createWord() {
    let random_index = Math.floor(Math.random() * words_array.length);
    let random_word = words_array[random_index];
    return random_word;
}

function randomArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let temp = array[i];
        let j = Math.floor(Math.random() * (i + 1));
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function guess() {
    player_guess = input.value;
    guesses++;
    if (player_guess === scramble) {
        in_play = false;
        message.innerHTML = `Correct, it was ${scramble}! *${guesses}`;
        input.classList.toggle("hidden");
        button.innerHTML = "Start";
    } else {
        message.innerHTML = `<p>${scrambled} - Wrong guess again!</p>`;
        setTimeout(function () {
            message.innerHTML = `<p>${scrambled}</p>`;
        }, 2000);
    }
}
