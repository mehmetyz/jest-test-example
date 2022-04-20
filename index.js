

const getMaxLengthWord = (str) => {
    const words = str.split(' ');
    let maxLength = 0;
    let maxLengthWord = '';
    for (let i = 0; i < words.length; i += 1) {
        if (words[i].length > maxLength) {
        maxLength = words[i].length;
        maxLengthWord = words[i];
        }
    }
    return maxLengthWord;
}

const getMinLengthWord = (str) => {
    const words = str.split(' ');
    let minLength = words[0].length;
    let minLengthWord = words[0];
    for (let i = 0; i < words.length; i += 1) {
        if (words[i].length < minLength) {
        minLength = words[i].length;
        minLengthWord = words[i];
        }
    }
    return minLengthWord;
}


const getMostRepeatedWord = (str) => {
    const words = str.split(' ');
    let maxCount = 0;
    let maxCountWord = '';
    for (let i = 0; i < words.length; i += 1) {
        let count = 0;
        for (let j = 0; j < words.length; j += 1) {
            if (words[i] === words[j]) {
                count += 1;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            maxCountWord = words[i];
        }
    }
    return maxCountWord;
}

const getLeastRepeatedWord = (str) => {
    const words = str.split(' ');
    let minCount = words.length;
    let minCountWord = '';
    for (let i = 0; i < words.length; i += 1) {
        let count = 0;
        for (let j = 0; j < words.length; j += 1) {
            if (words[i] === words[j]) {
                count += 1;
            }
        }
        if (count < minCount) {
            minCount = count;
            minCountWord = words[i];
        }
    }
    return minCountWord;
}

const getCapitalizedWords = (str) => {
    const words = str.split(' ');
    let capitalizedWords = [];
    for (let i = 0; i < words.length; i += 1) {
        if (words[i][0] === words[i][0].toUpperCase()) {
            capitalizedWords.push(words[i]);
        }
    }
    return capitalizedWords;
}

const getLowercaseWords = (str) => {
    const words = str.split(' ');
    let lowercaseWords = [];
    for (let i = 0; i < words.length; i += 1) {
        if (words[i][0] === words[i][0].toLowerCase()) {
            lowercaseWords.push(words[i]);
        }
    }
    return lowercaseWords;
}


const getWordsWithLength = (str, length) => {
    const words = str.split(' ');
    let wordsWithLength = [];
    for (let i = 0; i < words.length; i += 1) {
        if (words[i].length === length) {
            wordsWithLength.push(words[i]);
        }
    }
    return wordsWithLength;
}

const getReversedWords = (str) => {
    const words = str.split(' ');
    let reversedWords = [];
    for (let i = 0; i < words.length; i += 1) {
        reversedWords.push(words[i].split('').reverse().join(''));
    }
    return reversedWords.join(' ');
}

module.exports = {
    getMaxLengthWord,
    getMinLengthWord,
    getMostRepeatedWord,
    getLeastRepeatedWord,
    getCapitalizedWords,
    getLowercaseWords,
    getReversedWords,
    getWordsWithLength,
};
