const goHealth = require('.goHealth');

test('testing my shit', () => {
  expect(calculateBigrams('gohealth.txt')).toBe(3);
});
