function sum(a, b) {
  return a + b;
}

function isPalindrome(str) {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

function shallowObjClone(obj) {
  return {...obj};
}

module.exports = {
    sum,
    isPalindrome,
    shallowObjClone
};