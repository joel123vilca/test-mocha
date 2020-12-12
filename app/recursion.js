exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(dir, filelist) {
    var fs = fs || require('fs'),
    files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(file);
    }
    });
  return filelist;
  },

  permute: function(arr) {
    let result = [];  if (arr.length === 0) return [];
    if (arr.length === 1) return [arr];
    for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
      const remainingarr = arr.slice(0, i).concat(arr.slice(i + 1));
      const remainingarrPermuted = this.permute(remainingarr);
      for (let j = 0; j < remainingarrPermuted.length; j++) {
        const permutedArray = [currentNum].concat(remainingarrPermuted[j]);
        result.push(permutedArray);
      }
    }
    return result;
  },

  fibonacci: function(n) {
    return n <1 ? 0
    : n<=2 ? 1
    : this.fibonacci(n-1) + this.fibonacci(n-2)
  },

  validParentheses: function(n) {

  }
};
