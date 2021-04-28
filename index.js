const {
  Client
} = require('discord.js');
const {
  CDCommands
} = require('cdcommands');
const client = new Client({
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
const fs = require('fs');
require('dotenv').config();
const Enmap = require('enmap');
const http = require('http');
const url = require('url');
const port = process.env.PORT;
const fetch = require('node-fetch');
memberCounter = require('./features/member-counter');

client.on("ready", () => {
  console.log(chalk.green(
    `Logged in as ${client.user.tag} for ${client.guilds.cache.size} current server(s)`,
  ));
  new CDCommands(client, {
    commandsDir: "commands",
    eventsDir: "events",
    featuresDir: "features",
    MessageJSONPath: "message.json",
    testServers: ['828579107830104096'],
    devs: ['132631391983632384'],
    defaultPrefix: process.env.PREFIX,
    mongoURI: process.env.MONGO_URI,
    cacheUpdateSpeed: 60000 * 5,
    disabledDefaultCommands: ['help'],
    customMessageEvent: true,
  })

  const targetGuild = client.guilds.cache.get('755142481317855293');
  if (targetGuild.available) {
    console.log(('[GUILD FOUND]'.blue) + ` ${targetGuild.name}`);
  }
  const memberCount = targetGuild.memberCount;
  let activities = [{
        type: 'WATCHING',
        status: `${targetGuild.memberCount} WIG members!`
      },
      {
        type: 'PLAYING',
        status: `for ${targetGuild.name}`
      }
    ],
    i = 0

  client.user.setActivity('the loading screen', {
    type: 'WATCHING'
  })

  setInterval(() => {
    const current = activities[i++ % activities.length]
    const {
      type,
      status
    } = current
    client.user.setActivity(status, {
      type
    })
  }, 30 * 1000)
})

const myEnmap = new Enmap({
  name: 'settings',
  autoFetch: true,
  fetchAll: false,
});

const chalk = require('chalk');
const winston = require('winston');
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'log'
    }),
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
        client_secret: process.env.CLIENT_SECRET,
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