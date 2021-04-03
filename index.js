const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const fs = require('fs');
require('dotenv').config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

const chalk = require('chalk');
const winston = require('winston');
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'log' }),
  ],
  format: winston.format.printf(
    (log) => `[${log.level.toUpperCase()}] - ${log.message}`,
  ),
});

client.on('debug', (m) => logger.log('debug', m));
client.on('warn', (m) => logger.log('warn', m));
client.on('error', (m) => logger.log('error', m));

process.on('uncaughtException', (error) => logger.log('error', error));

client.login(process.env.DISCORD_TOKEN);
