/**
 * Функция сортировки слов в предложении
 * @param {string} unSortedString - предложение которое надо отсортировать
 * @returns {string} - отсортированное предложение
 */

'use strict';

let sort = unSortedString => {
    let sortedString = '';

    unSortedString.split(' ').forEach(word => {
        let lowerCaseWord = word.toLowerCase();
        lowerCaseWord = [...lowerCaseWord].sort( (a, b) => new Intl.Collator(['ru', 'jp']).compare(a, b) );
        lowerCaseWord[0] = lowerCaseWord[0].toUpperCase();
        sortedString += lowerCaseWord.join('') + ' ';
    });

    return sortedString
        .split(' ')
        .sort( (a, b) => new Intl.Collator(['ru', 'jp'],).compare(a, b) )
        .join(' ')
        .trim()
}
