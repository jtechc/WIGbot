const util = require('minecraft-server-util');

module.exports = {
    name: 'mcserver',
    category: 'info',
    aliases: ['mc', 'mccheck', 'minecraft'],
    description: 'get information about the minecraft server',
    execute(client, message, cmd, args, Discord){
        if(cmd === 'mcserver'){

        if(!args[0]) return message.channel.send('Please enter a minecraft server IP');
        if(!args[1]) return message.channel.send('Please enter a minecraft server ports');

        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
            // console.log(response);
            const embed = new Discord.MessageEmbed()
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