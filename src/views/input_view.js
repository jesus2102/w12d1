const PubSub = require('../../helpers/pub_sub.js')

const InputView = function () {

};

InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (evt) => {
    event.preventDefault();

    const inputtedText = evt.target.text.value;
    PubSub.publish('InputView:text-inputted', inputtedText);
    console.log('inputted text', inputtedText);
  });
};

module.exports = InputView;
