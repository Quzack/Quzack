module.exports = {
    name: 'ping',
    description: "Check bot and player ping",
    execute(message,args,Discord,client){
        message.channel.send("Pinging...").then(m => {
            var ping = m.createdTimestamp - message.createdTimestamp;
            var botPing = Math.round(client.ws.ping);
            var PingEm = new Discord.MessageEmbed().setColor("#7289DA").addFields({name: "User ping  ",value: ping + "ms", inline:true}, {name: "  Client ping", value: botPing + "ms", inline:true})

            m.edit(PingEm)
        })
    }
}
