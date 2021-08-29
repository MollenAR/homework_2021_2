/**
 * Функция сортировки слов в предложении
 * @param {string} unSortedString - предложение которое надо отсортировать
 * @returns {string} - отсортированное предложение
 */

'use strict';

let sort = unSortedString => {
    let sortedString = unSortedString.split(' ');

    sortedString.forEach( (word, wordPosition) => {
        word = word.toLowerCase();
        let symbolsInWord = word.split('');
        symbolsInWord.sort( (a, b) => Intl.Collator(['ru', 'jp']).compare(a, b) );
        symbolsInWord[0] = symbolsInWord[0].toUpperCase();
        sortedString[wordPosition] = symbolsInWord.join('');
    });

    sortedString.sort( (a, b) => Intl.Collator(['ru', 'jp']).compare(a, b) );

    return sortedString.join(' ')
}
