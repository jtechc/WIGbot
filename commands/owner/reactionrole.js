const { Command } = require("cdcommands");
require('dotenv').config();

/**
 * This command won't work at all. You can't do client.on events with CDCommands. 
 * You need to put it in your events directory, you can export the stuff you need 
 * from this file and require it in the event file. You also don't put two events 
 * in one file, you'd have two different event files and one would have the
 * messageReactionAdd event, the other would have the messageReactionRemove event.
 */

module.exports = new Command ({
  name: 'reactionrole',
  description: 'Sets up a reaction role message',
  details: 'Sets up a reaction role message',
  minArgs: 0,
  maxArgs: Infinity,
  usage: '{prefix}reactionrole',
  guildOnly: true,
  noDisable: false,
  userPermissions: ["ADMINISTRATOR"],
  category: 'Staff',
  run: async ({ message, client }) => {

    if (message.author.id === process.env.BOTOWNERID) { // Why not just put it as devOnly: true ?
      let channel = process.env.REACTIONROLECHANNEL;
      let yellowTeamRole = message.guild.roles.cache.find(
        (role) => role.name === 'reactionrole1',
      );
      let blueTeamRole = message.guild.roles.cache.find(
        (role) => role.name === 'reactionrole2',
      );
      let yellowTeamEmoji = '🍋';
      let blueTeamEmoji = '🔵';

      let embed = new Discord.MessageEmbed()
        .setColor('#e42642')
        .setTitle('Choose which role you want')
        .setDescription(
          'Choosing a role will allow you to interact with that room\n\n' +
            `${yellowTeamEmoji} for role 1\n` +
            `${blueTeamEmoji} for role 2`,
        );

      let messageEmbed = await message.channel.send(embed);
      messageEmbed.react(yellowTeamEmoji);
      messageEmbed.react(blueTeamEmoji);

      client.on('messageReactionAdd', async (reaction, user) => { // This will not work, you can't make client.on events
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === yellowTeamEmoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.add(yellowTeamRole);
          }
          if (reaction.emoji.name === blueTeamEmoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.add(blueTeamRole);
          }
        } else {
          return;
        }
      });
      client.on('messageReactionRemove', async (reaction, user) => { // This will not work, you can't make client.on events.
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;
        if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === yellowTeamEmoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.remove(yellowTeamRole);
          }
          if (reaction.emoji.name === blueTeamEmoji) {
            await reaction.message.guild.members.cache
              .get(user.id)
              .roles.remove(blueTeamRole);
          }
        } else {
          return;
        }
      });
    } else {
      message.channel.send(
        "You don't have the permission to use that command.",
      );
    }
  },
});


