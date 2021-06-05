module.exports = {
    name: 'slowmode',
    description: "Set slowmode of a channel",
    execute(message,args,Discord){
        const ErrEm = new Discord.MessageEmbed().setColor("#7289DA").addFields( {name: "**Permissions Invalid**", value: "You do not have the required permission to run this command."})
        const NoSlow = new Discord.MessageEmbed().setColor("#7289DA").addFields({name: "**No set number**", value: "You need to set a valid number for the channel to be ratelimited / The number must be above -1 and below 21600 seconds."})
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(ErrEm);
        if(!args[0]) return message.channel.send(NoSlow);
        if(isNaN(args[0])) return message.channel.send(NoSlow);
        if(args[0] > 21600) return message.channel.send(NoSlow);
        if(args[0] < 0) return message.channel.send(NoSlow);
        const SlowSet = new Discord.MessageEmbed().setColor("#7289DA").addFields({name: "**Slowmode**",value: "Chat slowmode has been set to **" + args[0] + "**"})
        if(args[1]){
            let channel = message.mentions.channels.first()
            channel.setRateLimitPerUser(args[0]);
            message.channel.send(SlowSet);
        } else{
            message.channel.setRateLimitPerUser(args[0]);
            message.channel.send(SlowSet);
        }
    }
}
