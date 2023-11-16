const helloWorld = require("../greet");

test('returns: Hello, Bob given: Bob', () => {
    expect(helloWorld("Bob")).toMatch("Hello, Bob.");
});

test('returns: Hello, my friend given: null', () => {
    expect(helloWorld(null)).toMatch("Hello, my friend.");
});

test('returns: Hello, my friend. given: undefined', () => {
    expect(helloWorld(undefined)).toBe('Hello, my friend.')
  });
  
test('return: Hello, my friend. given: "  " ', () => {
    expect(helloWorld("  ")).toBe('Hello, my friend.')
});

test('return:  HELLO, KENOBI! given: KENOBI', () => {
    expect(helloWorld("KENOBI")).toBe('HELLO, KENOBI!')
  });

test('giving Kratos, Thanathos given: Kratos and Thanathos.', () => {
    expect(helloWorld(['Kratos', 'Thanathos'])).toBe('Hello, Kratos and Thanathos.');
});