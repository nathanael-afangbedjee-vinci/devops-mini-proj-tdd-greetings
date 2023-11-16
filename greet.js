function greet(name) {
    if(name && typeof name === 'object')
        return twoWord(name);    
        
    if (name === null  || name === undefined || name.trim() === '') 
        return "Hello, my friend.";

    if(name === name.toUpperCase())
        return `HELLO, ${name}!`;

    return `Hello, ${(name)}.`;
}

function twoWord(name){
    return `Hello, ${name[0]} and ${name[1]}.`;
}

module.exports = greet;