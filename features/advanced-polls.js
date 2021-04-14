const channels = ['755142481716314216', '821250854006423553']

module.exports = (client, instance) => {
    client.on('message', (message) => {
        const { content } = message
        const eachLine = content.split('\n')

        for (const line of eachLine) {
            if (line.includes('=')) {
                const split = line.split('=')
                const emoji = split[0].trim()
                message.react(emoji)
            }
        }
    })
}