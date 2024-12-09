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
            const shortcode = word.slice(1, -1);
            return hackedEmojis[shortcode] || word;
        }
        return word;
    }

    // Function to replace emoji shortcodes in a phrase
    function emojifyPhrase(phrase) {
        const words = phrase.split(" ");
        const emojifiedWords = words.map(word => emojifyWord(word));
        return emojifiedWords.join(" ");
    }

    // Add event listener to process button
    const processBtn = document.getElementById("process-btn");
    const inputText = document.getElementById("input-text");
    const outputText = document.getElementById("output-text");

    processBtn.addEventListener("click", () => {
        const phrase = inputText.value;
        const result = emojifyPhrase(phrase);
        outputText.innerText = result;
    });