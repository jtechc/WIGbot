const chalk = require('chalk');
const { Event } = require('cdcommands');

module.exports = new Event("messageDelete", (client, message) => {
    console.log(chalk.red(`${client.user.username} saw ${message.author.username} delete ${message.content}`) // Your console probs gonna be a bit spammed
)})