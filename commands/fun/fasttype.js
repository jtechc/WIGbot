const { Command } = require('cdcommands');
const { FastType } = require('weky');
const leaderboard = require('../../schemas/leaderboardSchema.js')
const txtgen = require('txtgen');

module.exports = new Command({
name: 'fasttype',
description: 'A game to see who can type the fastest!',
details: 'A game to see who can type the fastest',
minArgs: 0,
maxArgs: 0,
usage: '{prefix}fasttype',
noDisable: false,
cooldown: 15000,
category: 'Fun',
run: ({ message }) => {
  const game = new FastType({
    message: message,
    winMessage: 'Damn, GG! You won!',
    sentence: txtgen.sentence(),
    loseMessage: 'Damn! You lost :/',
    time: 50000,
    startMessage: 'Let\'s see who can type the fastest! Good luck!'
  })
  game.start()
  console.log(`${message.author} has started a Fast Type mini-game`)
}
})