
let dotsCount = 0,

singleDots = ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"]
doubleDots = ["ت", "ق"]
tripleDots = ["پ", "ث", "چ", "ژ", "ش"]
midLetterDots = ["ی"]


inputTag = document.getElementById("text")
result = document.getElementById("dots")

/**
 * counts dots
 * @returns {void}
 * @param text
 */
function dotCounter(text) {


    var spText = text.split("")

    for (let i = 0; i < spText.length; i++) {
        const letter = spText[i]

 
        if (singleDots.includes(letter)) {
            dotsCount++
        };
        if (doubleDots.includes(letter)) {
            dotsCount+= 2
        };
        if (tripleDots.includes(letter)) {
            dotsCount+= 3
        }


        if (midLetterDots.includes(letter) && i !== spText.length - 1) {
            if (spText[i+1] !== " ") {
                dotsCount+= 2
            }
        }
    }
}

inputTag.addEventListener("input", function () {


    dotsCount = 0


    dotCounter(inputTag.value)

 
    result.innerHTML = dotsCount
})
