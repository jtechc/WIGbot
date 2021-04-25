    // client.on('messageReactionAdd', async (reaction, user) => {
    //     if (reaction.message.partial) await reaction.message.fetch()
    //     if (reaction.partial) await reaction.fetch()
    //     if (reaction.emoji.name === emojiReactionBackward) {
            
    //     }
    // })
    /* I don't see the point in this? You are wanting to send it to the person twice? 
    Why wouldn't you just do
    message.delete().catch(console.error); or something? There is no need for the if else statement.
    if (message.guild === null) {
        return
    } else {
        message.delete()
    }
    message.author.send(embed)
    */