exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    if(strArr.length) return true
    return strArr.length
  },

  endsWithVowel: function(str) {
    let r = /^([aeiou]).*\1$/i
    console.log(r.test(str))
    return r.test(str)
  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {
    let r = /^\$(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{1,2})?$/
    return r.test(str)
  }
};
