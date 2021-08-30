/**
 * Функция сортировки слов в предложении
 * @param {string} unSortedString - предложение которое надо отсортировать
 * @returns {string} - отсортированное предложение
 */

'use strict';

let sort = unSortedString => {
    if (unSortedString == undefined) return ''

    let sortedString = unSortedString.split(' ').reduce( (sortedPart, word) => {
        let lowerCaseWord = word.toLowerCase();
        lowerCaseWord = [...lowerCaseWord]
            .sort((a, b) => new Intl.Collator(['ru', 'jp']).compare(a, b))
            .join('')
            .replace(/^./, symbolToCapitalise => symbolToCapitalise.toUpperCase());
        return sortedPart + lowerCaseWord + ' '
    }, '');

    return sortedString
        .split(' ')
        .sort( (a, b) => new Intl.Collator(['ru', 'jp'],).compare(a, b) )
        .join(' ')
        .trim()
}
