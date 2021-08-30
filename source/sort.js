/**
 * Функция сортировки слов в предложении
 * @param {string} unSortedString - предложение которое надо отсортировать
 * @returns {string} - отсортированное предложение
 */

'use strict';

// let sort = unSortedString => {
//     let sortedString = unSortedString.split(' ');

//     sortedString.forEach( (word, wordPosition) => {
//         word = word.toLowerCase();
//         let symbolsInWord = word.split('');
//         symbolsInWord.sort( (a, b) => Intl.Collator(['ru', 'jp']).compare(a, b) );
//         symbolsInWord[0] = symbolsInWord[0].toUpperCase();
//         sortedString[wordPosition] = symbolsInWord.join('');
//     });

//     sortedString.sort( (a, b) => Intl.Collator(['ru', 'jp']).compare(a, b) );

//     return sortedString.join(' ')
// }

let sort = unSortedString => {
    let sortedString = '';

    unSortedString.split(' ').forEach(word => {
        word = word.toLowerCase().split('').sort( (a, b) => new Intl.Collator(['ru', 'jp']).compare(a, b) );
        word[0] = word[0].toUpperCase();
        sortedString += word.join('') + ' ';
    });

    return sortedString.split(' ').sort( (a, b) => new Intl.Collator(['ru', 'jp']).compare(a, b) ).join(' ').trim()
}
