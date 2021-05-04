const { Command } = require('cdcommands');
const { ShuffleGuess } = require('weky');


module.exports = new Command({
name: 'shuffleguess',
aliases: ['shuffle', 'shuffleaword'],
description: 'Bot shuffles a word, player needs to guess what it is',
details: 'Bot shuffles a word, player needs to guess what it is',
minArgs: 0,
maxArgs: 0,
usage: '{prefix}shuffle',
cooldown: 15000,
noDisable: false,
category: 'Fun',
run: ({ message, client }) => {
  let randomWords = require('random-words');
  const word = randomWords()
  const game = new ShuffleGuess({
    message: message,
    word: word,
    winMessage: 'Damn, GG! You win!'
  })
  game.start()
  client.logInfo({ data: `${message.author} started a shuffle word game.`})
}
})