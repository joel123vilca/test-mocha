exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {

  },

  convertToBinary: function(num) {
    return (num >>> 0).toString(2);
  },

  multiply: function(a, b) {
    return a*b
  }
};
