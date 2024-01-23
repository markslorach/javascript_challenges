'use strict'

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

const string1 = "the-stealth-warrior"
const string2 = "The_Stealth_Warrior"
const string3 = "The_Stealth-Warrior"


function toCamelCase(str){
    const firstWord = [];
    const words = str.split(/[-_]/);
    firstWord.push([words[0]]);
    const restOfWords = [...words].slice(1);
    for (let i = 0; i < restOfWords.length; i++){
        restOfWords[i] = restOfWords[i][0].toUpperCase() + restOfWords[i].slice(1);
    }
    return [...firstWord, ...restOfWords].join('');
}

console.log(toCamelCase(string1));
console.log(toCamelCase(string2));
console.log(toCamelCase(string3));

// better way
// return str.split(/[-_]/).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
