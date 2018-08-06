const ResultView = function () {

};

ResultView.prototype.updateView = function (result) {
  const resultView = document.querySelector('#result');
  if (result === null) {
    resultElement.textContent = "You did not write anything... Yet!";
  } else {
    resultElement.textContent = `You have written ${result} words so far.`;
  }
};

module.exports = ResultView;
