const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const fs = require('fs');
require('dotenv').config();
const http = require('http');
const url = require('url');
const port = process.env.PORT;
const fetch = require('node-fetch');

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

http
  .createServer((req, res) => {
    let responseCode = 404;
    let content = '404 Error';
    const urlObj = url.parse(req.url, true);

    if (urlObj.query.code) {
      const accessCode = urlObj.query.code;
      const data = {
        client_id: 'process.env.CLIENTID',
        client_secret: 'qxLFcVbWEAzWHZRqZXP0KGLqwn2HBu_T',
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:53134',
        code: accessCode,
        scope: 'the scopes',
      };
      fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        body: new URLSearchParams(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then((discordRes) => discordRes.json())
        .then((info) => {
          console.log(info);
          return info;
        })
        .then((info) =>
          fetch('https://discord.com/api/users/@me', {
            headers: {
              authorization: `${info.token_type} ${info.access_token}`,
            },
          }),
        )
        .then((userRes) => userRes.json())
        .then(console.log);
    }
    if (urlObj.pathname === '/') {
      responseCode = 200;
      content = fs.readFileSync('./index.html');
    }

    res.writeHead(responseCode, {
      'content-type': 'text/html;charset=utf-8',
    });

    res.write(content);
    res.end();
  })

  .listen(port);
client.on('debug', (m) => logger.log('debug', m));
client.on('warn', (m) => logger.log('warn', m));
client.on('error', (m) => logger.log('error', m));

process.on('uncaughtException', (error) => logger.log('error', error));

client.login(process.env.DISCORD_TOKEN);
