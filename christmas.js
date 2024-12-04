// Sample Data (Replace with your full data.js file if needed)
const films = [
    { title: "Home Alone", emoji: "🏠👦🎄" },
    { title: "Elf", emoji: "🧝🎄🎅" },
    { title: "The Grinch", emoji: "😠🎄💚" },
    { title: "Die Hard", emoji: "🌇💣👮✈️🔫" },
    { title: "The Polar Express", emoji: "🚂❄️🎄" }
];

const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const emojiCluesContainer = document.querySelector(".emoji-clues-container");
const messageContainer = document.querySelector(".message-container");

let currentFilmIndex = null;
let remainingGuesses = 3;
let usedFilms = [];
let gameOver = false;

// Get a random film that hasn't been used yet
function getRandomFilm() {
    const availableFilms = films.filter((_, index) => !usedFilms.includes(index));
    if (availableFilms.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * availableFilms.length);
    return films.find((film, index) => index === randomIndex);
}

// Display the emoji clues for a film
function displayEmojiClues(film) {
    emojiCluesContainer.textContent = film.emoji;
}

// Reset the game for the next film
function resetForNextFilm() {
    const nextFilm = getRandomFilm();
    if (nextFilm) {
        currentFilmIndex = films.indexOf(nextFilm);
        usedFilms.push(currentFilmIndex);
        remainingGuesses = 3;
        displayEmojiClues(nextFilm);
        messageContainer.textContent = "";
    } else {
        gameOver = true;
        emojiCluesContainer.textContent = "🎉";
        messageContainer.textContent = "That's all folks!";
        guessInput.disabled = true;
        guessButton.disabled = true;
    }
}

// Check the player's guess
function handleGuess() {
    if (gameOver) return;

    const userGuess = guessInput.value.trim().toLowerCase();
    const correctAnswer = films[currentFilmIndex].title.toLowerCase();

    if (userGuess === correctAnswer) {
        messageContainer.textContent = "Correct! 🎉";
        setTimeout(resetForNextFilm, 3000);
    } else {
        remainingGuesses--;
        if (remainingGuesses > 0) {
            messageContainer.textContent = `Incorrect! You have ${remainingGuesses} guess${
                remainingGuesses > 1 ? "es" : ""
            } remaining.`;
        } else {
            messageContainer.textContent = `The film was "${films[currentFilmIndex].title}"!`;
            setTimeout(resetForNextFilm, 3000);
        }
    }

    guessInput.value = ""; // Clear the input field
}

// Event Listener for Guess Button
guessButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default form behavior
    handleGuess();
});

// Initialize the game
resetForNextFilm();
