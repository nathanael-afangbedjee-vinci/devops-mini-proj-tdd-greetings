function greet(name) {
    if (name && typeof name === 'object')
        return multipleWords(name);

    if (name === null || name === undefined || name.trim() === '')
        return "Hello, my friend.";

    if (name === name.toUpperCase())
        return `HELLO, ${name}!`;

    return `Hello, ${(name)}.`;
}


function multipleWords(names) {
    let lowerCaseNames = [];
    let UpperCaseNames = [];
    let result = "";

    for (let i = 0; i < names.length; i++) {
        if (names[i] === names[i].toUpperCase()) {
            UpperCaseNames.push(names[i]);
        } else {
            lowerCaseNames.push(names[i]);
        }
    }

    if (lowerCaseNames.length > 0) {
        result += lowerCaseName(lowerCaseNames);
    }
    if (UpperCaseNames.length > 0 && lowerCaseNames.length > 0) {
        result += ' AND ';
    }
    if (UpperCaseNames.length > 0) {
        result += UpperCaseName(UpperCaseNames);
    }
    return result;

}


function UpperCaseName(UpperCaseNames) {
    let resultat = `HELLO ${UpperCaseNames[0]}`;
    for (let i = 1; i < UpperCaseNames.length - 1; i++) {
        resultat += `, ${UpperCaseNames[i]}`;
    }
    resultat += UpperCaseNames.length > 1 ? ` AND ${UpperCaseNames[UpperCaseNames.length - 1]}!` : `!`;
    return resultat;
}


function lowerCaseName(lowerCaseNames) {
    let result = `Hello, ${lowerCaseNames[0]}`;

    for (let i = 1; i < lowerCaseNames.length - 1; i++) {
        result += `, ${lowerCaseNames[i]}`;
    }
    result += lowerCaseNames.length > 1 ? ` and ${lowerCaseNames[lowerCaseNames.length - 1]}.` : '.';
    return result;
}

module.exports = greet, UpperCaseName, lowerCaseName;