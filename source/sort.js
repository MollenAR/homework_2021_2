'use strict';

let sort = unSortedString => {
    let sortedString = unSortedString.split(' ');

    sortedString.forEach( (word, wordPosition) => {
        word = word.toLowerCase();
        let symbolsInWord = word.split('');
        symbolsInWord.sort();
        symbolsInWord[0] = symbolsInWord[0].toUpperCase();
        sortedString[wordPosition] = symbolsInWord.join('');
    });

    sortedString.sort();

    return sortedString.join(' ')
}
