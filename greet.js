function greet(name, language = 'en') {
    if (name && typeof name === 'object') {
        return multipleWords(name, language);
    }

    if (name === null || name === undefined || name.trim() === '') {
        return getGreeting('friend', language);
    }

    if (name === name.toUpperCase()) {
        return getUppercaseGreeting(name, language);
    }

    return getNormalGreeting(name, language);
}

function multipleWords(names, language) {
    let lowerCaseNames = [];
    let upperCaseNames = [];
    let result = "";

    for (let i = 0; i < names.length; i++) {
        if (names[i] === names[i].toUpperCase()) {
            upperCaseNames.push(names[i]);
        } else {
            lowerCaseNames.push(names[i]);
        }
    }

    if (lowerCaseNames.length > 0) {
        result += lowerCaseName(lowerCaseNames, language);
    }
    if (upperCaseNames.length > 0 && lowerCaseNames.length > 0) {
        result += getConjunction(language) + ' ';
    }
    if (upperCaseNames.length > 0) {
        result += upperCaseName(upperCaseNames, language);
    }
    return result;
}

function upperCaseName(upperCaseNames, language) {
    let result = getUppercaseGreeting(upperCaseNames[0], language);
    for (let i = 1; i < upperCaseNames.length - 1; i++) {
        result += `, ${getUppercaseGreeting(upperCaseNames[i], language)}`;
    }
    result += upperCaseNames.length > 1 ? getConjunction(language) + ' ' + getUppercaseGreeting(upperCaseNames[upperCaseNames.length - 1], language) + '!' : '!';
    return result;
}

function lowerCaseName(lowerCaseNames, language) {
    let result = getNormalGreeting(lowerCaseNames[0], language);

    for (let i = 1; i < lowerCaseNames.length - 1; i++) {
        result += `, ${getNormalGreeting(lowerCaseNames[i], language)}`;
    }
    result += lowerCaseNames.length > 1 ? getConjunction(language) + ' ' + getNormalGreeting(lowerCaseNames[lowerCaseNames.length - 1], language) + '.' : '.';
    return result;
}

function getNormalGreeting(name, language) {
    const greetings = {
        'en': `Hello, ${name}`,
        'fr': `Bonjour, ${name}`,
        'nl': `Hallo, ${name}`
    };
    return greetings[language] || greetings['en'];
}

function getUppercaseGreeting(name, language) {
    const greetings = {
        'en': `HELLO, ${name} `,
        'fr': `SALUT, ${name} `,
        'nl': `HALLO, ${name} `
    };
    return greetings[language] ? `${greetings[language]}!` : `${greetings['en']}!`;
}

function getGreeting(type, language) {
    const greetings = {
        'en': `Hello, my ${type}.`,
        'fr': `Bonjour, mon ${type}.`,
        'nl': `Hallo, mijn ${type}.`
    };
    return greetings[language] || greetings['en'];
}

function getConjunction(language) {
    const conjunctions = {
        'en': 'and',
        'fr': 'et',
        'nl': 'en'
    };
    return conjunctions[language] || conjunctions['en'];
}

module.exports = greet;