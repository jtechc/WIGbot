require('dotenv').config();
const chalk = require('chalk');
module.exports = (Discord, client, message) => {
  const prefix = process.env.PREFIX;
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();
  const command =
    client.commands.get(cmd) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
  if (command) command.execute(client, message, args, Discord);

  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ]

  console.log(
    chalk.greenBright(`${message.author.tag} => (#${message.channel.name}):`) + (` ${message.content}`),
  );

};


// client.on('message', (message) => {
//   if (!message.content.startsWith(prefix) || message.author.bot) return;
//
//   const args = message.content.slice(prefix.length).split(/ +/);
//   const command = args.shift().toLowerCase();
//
//   if (command === 'rules') {
//     client.commands.get('rules').execute(message, args, Discord);
//   } else if (command === 'purge') {
//     client.commands.get('purge').execute(message, args);
//   } else if (command === 'kick') {
//     client.commands.get('kick').execute(message, args);
//   } else if (command === 'ban') {
//     client.commands.get('ban').execute(message, args);
//   } else if (command === 'reactionrole') {
//     client.commands.get('reactionrole').execute(message, args, Discord, client);
//   } else if (command === 'play') {
//     client.commands.get('play').execute(message, args);
//   } else if (command === 'leave') {
//     client.commands.get('leave').execute(message, args);
//   }
// });
