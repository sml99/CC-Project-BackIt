const {sum, isPalindrome, shallowObjClone} = require('./utils');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// generate 10 tests for isPalindrome
test('isPalindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
    expect(isPalindrome('Racecar')).toBe(true);
    expect(isPalindrome('raceCar')).toBe(true);
    expect(isPalindrome('racecars')).toBe(false);
    expect(isPalindrome('')).toBe(true);
    expect(isPalindrome('a')).toBe(true);
    expect(isPalindrome('aa')).toBe(true);
    expect(isPalindrome('ab')).toBe(false);
    expect(isPalindrome('abba')).toBe(true);
    expect(isPalindrome('abb')).toBe(false);
});
    
test('shallowObjClone', () => {
    const obj = {a: 1, b: 2, c: 3};
    const clone = shallowObjClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
});