'use strict';

const clear  = require('clear');
const prompt = require('prompt');

let number = Math.floor(Math.random(0, 100) * 100);
let loops = 10;
let guess;

clear();

function guessANumber(callback) {

  return prompt.get([{
    name: 'guess',
    message: 'Must be a number',
    description: 'Guess a number from 1 to 100',
    required: true,
    type: 'number'
  }], (err, result) => {

    callback(result.guess);

  });

}

let callback = function(guess) {

  if (guess === number) {
    console.log('GOT IT!!!');
  } else if (guess > number) {
    console.log('To high');
    guessANumber(callback);
  } else {
    console.log('To Low');
    guessANumber(callback);
  }

};

guessANumber(callback);
