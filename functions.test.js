functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY AND FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeDefined
// toBeTruthy matches anything that is treated as true
// toBeFalsy matches anything that is treated as flase

test('Should be null', () => {
  expect(functions.isNull()).toBeNull();
});