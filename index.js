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


const sleep = (ms) =>  {

    return new Promise(resolve => setTimeout(resolve, ms));
}

const getMostRepeatedWord = async (str) => {
    await sleep(3000);
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
    sleep(3000);
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

const getCapitalizeText = (str) => {
    sleep(3000);
    const words = str.split(' ');
    let capitalizedText = '';
    for (let i = 0; i < words.length; i += 1) {
        capitalizedText += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' ';
    }
    return capitalizedText;
}

const getLowercaseText = (str) => {
    sleep(3000);
    const words = str.split(' ');
    let lowercaseText = '';
    for (let i = 0; i < words.length; i += 1) {
        lowercaseText += words[i].toLowerCase() + ' ';
    }
    return lowercaseText;
}


const getWordsWithLength = (str, length) => {
    sleep(3000);
    const words = str.split(' ');
    let wordsWithLength = [];
    for (let i = 0; i < words.length; i += 1) {
        if (words[i].length === length) {
            wordsWithLength.push(words[i]);
        }
    }
    return wordsWithLength;
}

const getReversedText = (str) => {
    sleep(3000);
    const words = str.split(' ');
    let reversedText = '';
    for (let i = words.length - 1; i >= 0; i -= 1) {
        reversedText += words[i] + ' ';
    }
    return reversedText;
}

module.exports = {
    getMaxLengthWord,
    getMinLengthWord,
    getMostRepeatedWord,
    getLeastRepeatedWord,
    getCapitalizeText,
    getLowercaseText,
    getReversedText,
    getWordsWithLength,
};