exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    let name = str2
    let greeting = str1
    function sayIt() {
      return `${greeting}, ${name}`
    }
  }
};
