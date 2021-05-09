const { sum, sub } = require('../app')

describe('substraction', () => {
  test('substract 2 - 1 to equal 1', () => {
    expect(sub(2, 1)).toBe(1);
  });
  test('substract 2 - 1 to not equal 3', () => {
    expect(sub(2, 1)).not.toBe(1);
  });

  test('substract 2 - 1 to not equal 2', () => {
    expect(sub(2, 1)).not.toBe(2);
  });
});
describe('additions', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 1 + 2 to not equal 4', () => {
    expect(sum(1, 2)).not.toBe(4);
  });

  it('adds 1 + 2 to not equal 2', () => {
    expect(sum(1, 2)).not.toBe(2);
  });
});
