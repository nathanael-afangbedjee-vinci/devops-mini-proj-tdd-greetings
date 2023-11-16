function greet(name) {
    if(name && typeof name === 'object')
        return multipleWords(name);    
        
    if (name === null  || name === undefined || name.trim() === '') 
        return "Hello, my friend.";

    if(name === name.toUpperCase())
        return `HELLO, ${name}!`;

    return `Hello, ${(name)}.`;
}

function multipleWords(names){
    let sentenceStart = 'Hello, ';

    for (let i = 0; i < names.length - 1; i++) {
            sentenceStart += `${names[i]}`;
        if(i !== names.length - 2)
        sentenceStart +=`, `;
    }
    return sentenceStart +  ` and ${names[names.length-1]}.`;
}


module.exports = greet;