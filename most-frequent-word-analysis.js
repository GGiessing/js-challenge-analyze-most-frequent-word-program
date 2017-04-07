function getTokens(rawString) {
    // NB: `.filter(Boolean)` removes any falsy items from an array
    return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}
// .toLowerCase takes case sensitivity out of the equation. .split will remove
//punctuation so it is not counted as words i believe, and sort will sort our words aplhabetically

function mostFrequentWord(text) {
    //***named new function(mostFrequentWord) that takes one arguement(text)***
    var words = getTokens(text);
    // set new local variable(words) which has the value of previously defined function 
    //getTokens which takes the arguement(text)
    console.log(words);
    var wordFrequencies = {};
    // defined new local varbiale(wordFrequencies) which is an empty object
    for (var i = 0; i <= words.length; i++) {
        // created a for loop that sets a new variable(i) with a value of zero(undefined?)***
        // as long as i is less than or equal to words.length the loop will continue to run
        // i++ tells i to increment
        if (words[i] in wordFrequencies) {
            wordFrequencies[words[i]]++;
            // generates an if statement that says if the value at words[i] is already in the 
            //object wordFrequencies, then increment the value
        }
        else {
            wordFrequencies[words[i]]=1;
            // generates an else statement that says since the value at words[i] was NOT in the
            //object, add it to the wordFrequencies object
            //**bracket notation**
        }
    }
    var currentMaxKey = Object.keys(wordFrequencies)[0];
    // new local variable currentMaxKey that has the value of an array of the contents of wordFrequencies
    //starting at the first item in the array
    var currentMaxCount = wordFrequencies[currentMaxKey];
    // new local variable currentMaxCount has the value of the object wordFrequencies 
    //at the index defined by the previous variable[currentMaxKey]

    for (var word in wordFrequencies) {
        //***created a for loop that defines a new variable (word) within the wordFrequencies object***
        if (wordFrequencies[word] > currentMaxCount) {
            //generates if statement that says if the variable word within wordFrequencies is greater 
            //than the variable currentMaxCount..
            currentMaxKey = word;
            //currentMaxKey gets redefined to the word at that index
            currentMaxCount = wordFrequencies[word];
            //***redefines currentMaxCount to the value contained in wordFrequencies at index [word]***
        }
    }
    return currentMaxKey;
    //returns our word that was used the most
}

