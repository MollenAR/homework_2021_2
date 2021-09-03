/**
 * Функция сортировки слов в предложении
 * @param {string} unSortedString - предложение которое надо отсортировать
 * @returns {string} - отсортированное предложение
 */

'use strict';

const sort = (unSortedString) => {
    if (typeof unSortedString != 'string') throw new TypeError('Incorrect type')

    const sortedString = unSortedString.split(' ').reduce( (sortedPart, word) => {
        let lowerCaseWord = word.toLowerCase();
        lowerCaseWord = [...lowerCaseWord]
            .sort((a, b) => new Intl.Collator(['ru', 'jp']).compare(a, b))
            .join('');
        lowerCaseWord = lowerCaseWord.replace(lowerCaseWord[0],
            (symbolToCapitalise) => symbolToCapitalise.toUpperCase());
        return sortedPart + lowerCaseWord + ' '
    }, '');

    return sortedString
        .split(' ')
        .sort( (a, b) => new Intl.Collator(['ru', 'jp'],).compare(a, b) )
        .join(' ')
        .trim()
}
