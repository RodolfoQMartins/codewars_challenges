function getIsLetter(character) {
    return character.toLowerCase() !== character.toUpperCase();
}

function getIsUpperCase(character) {
    return character.toUpperCase() === character;
}

function getIsLowerCase(character) {
    return character.toLowerCase() === character;
}

function sameCase(a, b){
    if(!getIsLetter(a) || !getIsLetter(b)) {
        return -1
    }

    if(getIsUpperCase(a) && getIsUpperCase(b)) {
        return 1
    }

    if(getIsLowerCase(a) && getIsLowerCase(b)) {
        return 1
    }

    return 0
}

// Write a function that will check if two given characters are the same case.
//
// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
//
// 'A' and 'C' returns 1
//
// 'b' and 'G' returns 0
//
// 'B' and 'g' returns 0
//
// '0' and '?' returns -1
