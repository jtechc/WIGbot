const util = require('minecraft-server-util');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'mcserver',
    category: 'Info',
    minArgs: 0,
    maxArgs: 2,
    aliases: ['mc', 'mccheck', 'minecraft'],
    description: 'get information about the minecraft server',
    execute: ({mesage, args, text, client, prefix, instance, channel}) => {
        if(cmd === 'mcserver'){

        if(!args[0]) return message.channel.send('Please enter a minecraft server IP');
        if(!args[1]) return message.channel.send('Please enter a minecraft server ports');

        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            // console.log(response);
            const embed = new MessageEmbed()
            .setColor('#1E74BB')
            .setTitle('Mc server status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
            .setFooter('Mc server util by Jaegnah');

            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server');
            throw error;
        })
    
        }

        if(cmd === 'mc'){
            message.channel.send('This is not a minecraft server');
        }

        if(cmd === 'minecraft'){
            message.channel.send('we love minecraft');
        }
    }
}