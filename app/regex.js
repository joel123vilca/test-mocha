const { countBy } = require("underscore");

exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    let r = /\d/
    return r.test(str);
  },

  containsRepeatingLetter: function(str) {
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);
    if(strArr.length) return true
    return strArr.length
  },

  endsWithVowel: function(str) {
    let r = /^([aeiou]).*\1$/i
    return r.test(str)
  },

  captureThreeNumbers: function(str) {
    let reg;
    if(reg = str.match(/(\d{3})/)){
      return reg[0];
    } else{
      return false;
    }
  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {
    let r = /^\$(0|[1-9][0-9]{0,2})(,\d{3})*(\.\d{1,2})?$/
    return r.test(str)
  }
};
