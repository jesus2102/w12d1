const InputView = function () {

};

InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('input', (evt) => {
    const inputtedText = evt.target.value;
    console.log('inputted text', inputtedText);
  });
};

module.exports = InputView;
