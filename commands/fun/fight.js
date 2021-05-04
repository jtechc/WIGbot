const { Command } = require('cdcommands');
const { fight } = require('weky');

module.exports = new Command({
name: 'fight',
description: 'Let two users dual each other',
details: 'Let two users dual each other',
minArgs: 1,
maxArgs: 1,
usage: '{prefix}fight <userTag>',
noDisable: false,
cooldown: 15000,
category: 'Fun',
run: ({ message, client }) => {
  const newFight = new fight({
    client: client,
    message: message,
    acceptMessage: 'Click to fight with ' + message.author,
    challenger: message.author,
    opponent: message.mentions.users.first()
  })
  newFight.start();
  console.log(`${message.author} has picked a fight.`);
}
})