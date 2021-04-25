/*
    You'll need to do `npm i sourcebin` for this. If you did something like
    {prefix}jseval message
    The output would be too big and you'd get an error sending it. I've kinda jus yeeted
    the eval command I have on my bot but just not added everything from it :)


    Your Eval Command: (I'd just delete it if u wanna stick with what I made, idk why you keep so much code in comments, just delete it)
    const { member, content } = message;

    if (message.author.id === process.env.BOTOWNERID) {
      const result = eval(content.replace('?eval ', ''));

      const embed = new MessageEmbed()
        .setColor('#1E74BB')
        .addField('Eval Output', `${result}`)
        .setTimestamp();

      message.channel.send(embed);
    } else {
      console.log(chalk.red(`${message.author.tag} attempted to use eval.`));
      message.reply('```diff\n- You are not allowed to use my eval command.```');
      return;
    }*/