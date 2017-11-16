var censoredWords = ["bad", "mad", "sad"];

var customCensoredWords = [];

function censor(inStr)
{
    for(idx in getCensoredWords()) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }

    return inStr;
}

function addCensoredWord(word)
{
    customCensoredWords.push(word);
}

function getCensoredWords()
{
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;