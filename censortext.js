var censoredWords = ["bad", "mad", "sad"];

var customCensoredWords = [];

function censor(inStr)
{
    var censoredWordsList = getCensoredWords();
    for(idx in censoredWords()) {
        inStr = inStr.replace(censoredWordsList[idx], "****");
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