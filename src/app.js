const InputView = require('./views/input_view.js');
const WordChecker = require('./modules/word_checker.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const inputView = new InputView;
  inputView.bindEvents();

  const wordChecker = new WordChecker;
  wordChecker.bindEvents();
  console.log('JavaScript Loaded');

  const resultView = new ResultView();
  resultView.bindEvents();
});
