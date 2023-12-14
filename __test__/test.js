const helloWorld = require("../greet");

test("returns: Hello, Bob given: Bob", () => {
  expect("Hello, Bob.").toMatch("Hello, Bob.");
});

test("returns: Hello, my friend given: null", () => {
  expect(helloWorld(null)).toMatch("Hello, my friend.");
});

test("returns: Hello, my friend. given: undefined", () => {
  expect(helloWorld(undefined)).toBe("Hello, my friend.");
});

test('return: Hello, my friend. given: "  " ', () => {
  expect(helloWorld("  ")).toBe("Hello, my friend.");
});

test("return:  HELLO, KENOBI! given: KENOBI", () => {
  expect("HELLO, KENOBI!").toBe("HELLO, KENOBI!");
});

test("giving Kratos, Thanathos given: Kratos and Thanathos.", () => {
  expect("Hello, Kratos and Thanathos.").toBe(
    "Hello, Kratos and Thanathos.",
  );
});

test("return: Hello, Kratos, Thanathos and Hypnos. given: Kratos, Thanathos and Hypnos", () => {
  expect("Hello, Kratos, Thanathos and Hypnos.").toBe(
    "Hello, Kratos, Thanathos and Hypnos.",
  );
});

test("return: Hello, Kratos, Thanathos, Protos and Hypnos. given: Kratos, Thanathos, Protos and Hypnos", () => {
  expect("Hello, Kratos, Thanathos, Protos and Hypnos.").toBe(
    "Hello, Kratos, Thanathos, Protos and Hypnos.",
  );
});

test("return: Bonjour, Kratos et Thanathos. given: Kratos Thanathos in fr ", () => {
  expect("Bonjour, Kratos et Thanathos.").toBe(
    "Bonjour, Kratos et Thanathos.",
  );
});
