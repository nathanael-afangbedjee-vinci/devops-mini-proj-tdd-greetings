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

test('return: Hello, Kratos, Thanathos and Hypnos. given: Kratos, Thanathos and Hypnos', () => {
    expect(helloWorld(['Kratos', 'Thanathos' , 'Hypnos'])).toBe('Hello, Kratos, Thanathos and Hypnos.');
  });
  
  test('return: Hello, Kratos, Thanathos, Protos and Hypnos. given: Kratos, Thanathos, Protos and Hypnos', () => {
    expect(helloWorld(['Kratos', 'Thanathos' , 'Protos', 'Hypnos'])).toBe('Hello, Kratos, Thanathos, Protos and Hypnos.');
  });

  test('return: Hello, Thanathos and Hypnos. AND HELLO KRATOS! given: Thanathos, Hypnos and KRATOS', () => {
    expect(helloWorld(['Thanathos', 'Hypnos' , 'KRATOS'])).toBe('Hello, Thanathos and Hypnos. AND HELLO KRATOS!');
  });
  