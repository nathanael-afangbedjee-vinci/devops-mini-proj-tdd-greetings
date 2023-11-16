const helloWorld = require("../greet");

test('returns: Hello, Bob given: Bob', () => {
    expect(helloWorld("Bob")).toMatch("Hello, Bob.");
});
