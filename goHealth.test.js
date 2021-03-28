const goHealth = require('./goHealth');

test('testing my shit', () => {
  expect(goHealth('gohealth.txt')).toBe(3);
});
