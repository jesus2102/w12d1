const PubSub = require('../../helpers/pub_sub.js')

const WordChecker = function () {
  PubSub.subscribe('InputView:text-inputted', (event) => {
    const inputtedText = event.detail;
  });
};

WordChecker.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:text-inputted', (event) => {
    const inputtedText = event.detail;
    const result = this.wordcounter(inputtedText);
    PubSub.publish('WordChecker:result', result);
  })
}

WordChecker.prototype.wordcounter = function (str) {
  if (!str.length){
    return;
  }
  
  return str.split(' ').length;
};

module.exports = WordChecker;
