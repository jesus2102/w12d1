const PubSub = require('../../helpers/pub_sub.js')

const ResultView = function () {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordChecker:result', (event) => {
    const result = event.detail;
    this.updateView(result);
  })
};

ResultView.prototype.updateView = function (result) {
  const resultView = document.querySelector('#result');
  if (result == null) {
    resultView.textContent = "You did not write anything... Yet! Try again.";
  } else {
    resultView.textContent = `You have written ${result} words so far.`;
  }
};

module.exports = ResultView;
