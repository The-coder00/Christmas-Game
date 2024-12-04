// Sample Data (Replace with your full data.js file if needed)
const films = [
    { title: "Home Alone", emoji: "🏠👦🎄" },
    { title: "Elf", emoji: "🧝🎄🎅" },
    { title: "The Grinch", emoji: "😠🎄💚" },
    { title: "Die Hard", emoji: "🌇💣👮✈️🔫" },
    { title: "The Polar Express", emoji: "🚂❄️🎄" },
    { title: "A Christmas Carol", emoji: "👻🎅🎄" },
    { title: "Love Actually", emoji: "❤️🎄🇬🇧" },
    { title: "It's a Wonderful Life", emoji: "🌟🏡🎄" },
    { title: "National Lampoon's Christmas Vacation", emoji: "🚗🏠🎄" },
    { title: "The Santa Clause", emoji: "🎅🪄🎄" },
    { title: "Frosty the Snowman", emoji: "⛄🎩❄️" },
    { title: "Rudolph the Red-Nosed Reindeer", emoji: "🦌🔴🎄" },
    { title: "Jingle All the Way", emoji: "🎁🏃🎅" },
    { title: "A Charlie Brown Christmas", emoji: "🎄🌰🎹" },
    { title: "Miracle on 34th Street", emoji: "🎅🛍️🏙️" },
    { title: "Bad Santa", emoji: "🎅🍺💵" },
    { title: "Scrooged", emoji: "👻💰🎄" },
    { title: "The Nightmare Before Christmas", emoji: "🎃🎄👻" },
    { title: "White Christmas", emoji: "🎵❄️🎄" },
    { title: "Krampus", emoji: "😈🎅🎄" },
    { title: "Arthur Christmas", emoji: "🎅🎄🚀" },
    { title: "The Holiday", emoji: "🏡✈️❤️" },
    { title: "Deck the Halls", emoji: "💡🎄🏡" },
    { title: "A Christmas Story", emoji: "👦🎅🎁" },
    { title: "Four Christmases", emoji: "👨‍👩‍👧‍👦🎄✈️" },
    { title: "Gremlins", emoji: "👾🎄🐾" },
    { title: "The Christmas Chronicles", emoji: "🎅🚂🎄" },
    { title: "How the Grinch Stole Christmas", emoji: "😠🎄🎁" },
    { title: "Noelle", emoji: "🎅🎁❄️" },
    { title: "Last Christmas", emoji: "🎵🎄❤️" },
    { title: "The Star", emoji: "🐴⭐🎄" },
    { title: "The Family Stone", emoji: "🏡❤️🎄" },
    { title: "Christmas with the Kranks", emoji: "🏡🎄🎅" },
    { title: "Klaus", emoji: "🎅📜🎁" },
    { title: "Holiday Inn", emoji: "🏨🎵🎄" },
    { title: "While You Were Sleeping", emoji: "💤❤️🎄" },
    { title: "Annie", emoji: "👧🎄🎵" },
    { title: "The Muppet Christmas Carol", emoji: "🐸👻🎄" },
    { title: "The Princess Switch", emoji: "👸🎄🎭" },
    { title: "Snow Day", emoji: "❄️⛄🎄" },
    { title: "The Year Without a Santa Claus", emoji: "🎅❄️🔥" },
    { title: "Jack Frost", emoji: "⛄🎵🎄" },
    { title: "A Boy Called Christmas", emoji: "👦🎄✨" },
    { title: "Rise of the Guardians", emoji: "🦷🎅❄️" },
    { title: "12 Dates of Christmas", emoji: "🗓️❤️🎄" },
    { title: "Office Christmas Party", emoji: "🏢🎄🍾" },
    { title: "Frozen", emoji: "❄️👸⛄" },
    { title: "Shrek the Halls", emoji: "👹🎄🎅" },
    { title: "Fred Claus", emoji: "🎅👨‍👦🎄" },
    { title: "Santa Buddies", emoji: "🐾🎄🎅" },
    { title: "Snow Dogs", emoji: "🐕❄️🏔️" },
    { title: "The Spirit of Christmas", emoji: "👻🎄❤️" },
    { title: "Happy Christmas", emoji: "😊🎄❤️" },
    { title: "Nestor the Long-Eared Christmas Donkey", emoji: "🐴👂🎄" },
    { title: "Holiday Rush", emoji: "🎵🎄❤️" },
    { title: "My Christmas Inn", emoji: "🏨❤️🎄" },
    { title: "A Very Harold & Kumar Christmas", emoji: "🍔🎄🍁" },
    { title: "Reindeer Games", emoji: "🦌💰🎄" },
    { title: "Joyeux Noel", emoji: "🇫🇷🎄❤️" },
    { title: "Nativity!", emoji: "👶🎄✨" },
    { title: "Prancer", emoji: "🦌🎄❤️" },
    { title: "Let It Snow", emoji: "❄️❤️🎄" },
    { title: "A Christmas Prince", emoji: "👑❤️🎄" },
    { title: "Angels in the Snow", emoji: "👼❄️🏡" },
    { title: "Finding Santa", emoji: "🔎🎅🎄" },
    { title: "A Christmas Detour", emoji: "✈️❤️🎄" },
    { title: "A Royal Christmas", emoji: "👑🎄❤️" },
    { title: "Christmas in Connecticut", emoji: "🏡🎄❤️" },
    { title: "Holiday Engagement", emoji: "💍🎄❤️" },
    { title: "Snowglobe", emoji: "❄️🔮🎄" },
    { title: "Christmas Town", emoji: "🏘️🎄❤️" },
    { title: "The Perfect Holiday", emoji: "🎁🎄❤️" },
    { title: "The Nutcracker", emoji: "🎵🩰🎄" },
    { title: "Barbie in A Christmas Carol", emoji: "👗🎄👻" },
    { title: "Trolls Holiday", emoji: "🎵🎄👹" },
    { title: "The Christmas Train", emoji: "🚂🎄❤️" },
    { title: "Holidate", emoji: "❤️🎄😂" },
    { title: "Home for Christmas", emoji: "🏡🎄❤️" },
    { title: "The Holiday Calendar", emoji: "📅🎄❤️" },
    { title: "A Bad Moms Christmas", emoji: "👩‍👧🎄😂" },
    { title: "Snow Bride", emoji: "👰❄️❤️" },
    { title: "A Gingerbread Romance", emoji: "🍪❤️🎄" },
    { title: "Christmas Under Wraps", emoji: "🎁🎄❄️" },
    { title: "Love at the Christmas Table", emoji: "❤️🎄🍽️" },
    { title: "Hats Off to Christmas!", emoji: "🎩🎄❤️" },
    { title: "The Christmas House", emoji: "🏡🎄❤️" },
    { title: "A Christmas Tree Grows in Colorado", emoji: "🌲🎄❤️" }
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
