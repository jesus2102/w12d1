const WordChecker = function () {

};

WordChecker.prototype.wordcounter = function (str) {
  let textSplitted = str.split(' ');
  let wordsSplitted = textarea.filter(function (words) {
    return words !== ' ';
  });
  const numberOfWords = wordsSplitted.length();
};

module.exports = WordChecker;
