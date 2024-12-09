const hackedEmojis = {
    "angry": "🎁",   // 😠
    "thumbsdown": "👏",   // 👎  
    "man_facepalming": "🎅",   // 🤦‍♂️
    "cry": "‍😄",   // 😭
    "puke": "🤩"    // 🤮
};

// Function to replace a single emoji shortcode with the hacked version
function emojifyWord(word) {
    if (word.startsWith(":") && word.endsWith(":")) {
        const shortcode = word.slice(1, -1); // Remove the colons
        return hackedEmojis[shortcode] || word; // Return hacked emoji or original word
    }
    return word; // Return word if no colons
}

// Function to replace emoji shortcodes in a phrase
function emojifyPhrase(phrase) {
    const words = phrase.split(" "); // Split phrase into words
    const emojifiedWords = words.map(word => emojifyWord(word)); // Map each word
    return emojifiedWords.join(" "); // Join back into a phrase
}

// Add event listener to process button
document.getElementById("process-btn").addEventListener("click", () => {
    const phrase = document.getElementById("input-text").value; // Get input value
    const result = emojifyPhrase(phrase); // Process the phrase
    document.getElementById("output-text").innerText = result; // Display the result
});