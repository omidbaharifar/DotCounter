// count of dots will be stored on this variable
let dotsCount = 0,

// Specifying dotted letters
singleDots = ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"],
doubleDots = ["ت", "ق"],
tripleDots = ["پ", "ث", "چ", "ژ", "ش"],
midLetterDots = ["ی"];

// input and result tags
inputTag = document.getElementById("text"),
result = document.getElementById("dots");

// creating function that counts dots
function dotCounter(text) {

    // spliting string to array
    var spText = text.split("");

    for (let i = 0; i < spText.length; i++) {
        const letter = spText[i];

        // checking for dotted letters and add count to variable
        if (singleDots.includes(letter)) {
            dotsCount++;
        };
        if (doubleDots.includes(letter)) {
            dotsCount+= 2;
        };
        if (tripleDots.includes(letter)) {
            dotsCount+= 3;
        }

        // Check for letters that only have dots in the middle of the string
        if (midLetterDots.includes(letter) && i !== spText.length - 1) {
            if (spText[i+1] !== " ") {
                dotsCount+= 2;
            }
        }
    }
};

inputTag.addEventListener("input", function () {

    // clear variable
    dotsCount = 0;

    // run dot counter function on input value
    dotCounter(inputTag.value);

    // show result on result tag
    result.innerHTML = dotsCount;
});
