function getTokens(rawString) {
    // NB: `.filter(Boolean)` removes any falsy items from an array
    // .toLowerCase takes case sensitivity out of the equation. .split will remove punctuation (regular expresions http://regexr.com/) so it is not counted as words i believe, and sort will sort our words aplhabetically
    return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

//***named new function(mostFrequentWord) that takes one arguement(text)***
function mostFrequentWord(text) {

    // set new local variable(words) which has the value of previously defined function //getTokens, which takes the arguement(text)
    var words = getTokens(text);

    console.log(words);

    // defined new local ouput varbiale(wordFrequencies) which is an empty object
    var wordFrequencies = {};

    // created a for loop that sets a new variable(i) with a value of zero(undefined?)***
    // as long as i is less than or equal to words.length the loop will continue to run
    // i++ tells i to increment
    for (var i = 0; i <= words.length; i++) {

        // generates an if statement that says if the value at words[i] is already in the //object wordFrequencies, then increment the value saying how many times it was used
        if (words[i] in wordFrequencies) {
            wordFrequencies[words[i]]++;
        }
        else {
            // generates an else statement that says since the value at words[i] was NOT in the //object, add it to the wordFrequencies object with the value 1 (it was used once)
            //**bracket notation**
            wordFrequencies[words[i]]=1;

        }
    }


    //searcing the the most frequent word in the wordFrequencies ouput array by creating a initial champion out of the first word and number of usages in the array
    // (initial word champion) new local variable currentMaxKey that has the value of an array of the contents of wordFrequencies, starting at the first item in the array
    var currentMaxKey = Object.keys(wordFrequencies)[0];

    // (initial number of usages for the word champion) new local variable currentMaxCount has the value of the object wordFrequencies at the index defined by the previous variable[currentMaxKey]
    var currentMaxCount = wordFrequencies[currentMaxKey];

    //***created a for loop that defines a new variable (word) within the wordFrequencies object in order to check the usages of every other word apart from the first and compare that with the intermediate champion***
    for (var word in wordFrequencies) {

        //generates if statement that says if the variable word within wordFrequencies is greater than the variable currentMaxCount..
        if (wordFrequencies[word] > currentMaxCount) {

            //currentMaxKey gets redefined to the word
            currentMaxKey = word;

            //***redefines currentMaxCount to the value contained in wordFrequencies at index (number the usages for the word above))***
            currentMaxCount = wordFrequencies[word];

        }
    }

    //returns our word that was used the most
    return currentMaxKey;

}
