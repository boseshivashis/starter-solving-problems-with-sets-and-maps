/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    // Instantiate a new Map named results
    const results = new Map();

    // For each word in the words array
    for (const word of words) {
        // Lowercase the word
        const lowerCaseWord = word.toLowerCase();

        // Find all unique letters in the word
        const letterSet = new Set(lowerCaseWord); // Create a Set to remove duplicates
        const uniqueLettersArray = Array.from(letterSet).sort(); // Convert Set to Array and sort it

        // Create a string from the sorted array of letters
        const sortedLetters = uniqueLettersArray.join('');

        // Check if the sorted string of letters is a key in the results Map
        if (results.has(sortedLetters)) {
            // Add word to the array associated with that key
            results.get(sortedLetters).push(word);
        } else {
            // Make a new entry in the results Map
            results.set(sortedLetters, [word]);
        }
    }

    // Return the results Map
    return results;


    }
module.exports = sameLetters;
