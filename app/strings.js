exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    
  },

  wordWrap: function(str, cols) {
    let newLineStr = "\n"; 
    let done = false; 
    let res = '';
    while (str.length > cols) {                 
      found = false;
      for (i = cols - 1; i >= 0; i--) {
        if (testWhite(str.charAt(i))) {
          res = res + [str.slice(0, i), newLineStr].join('');
          str = str.slice(i + 1);
          found = true;
          break;
        }
      }
      if (!found) {
        res += [str.slice(0, cols), newLineStr].join('');
        str = str.slice(cols);
      }
    }
    return res + str
  },

  reverseString: function(str) {

  }
};
