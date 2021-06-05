module.exports = {
    name: "ban",
    description: "Bans a user from the server",
    async execute(message,args,Discord){
        const ErrorEmbed = new Discord.MessageEmbed().setColor("#7289DA").addFields({name: "**Error**", value: "Failed to ban this user , if you beliebe this is an error dm an admin or above"})
        const NoClear = new Discord.MessageEmbed().setColor("#7289DA").addFields({name: "**No set user**", value: " You need to mention a user to ban them / Always provide a reason."});
        const ErrEm = new Discord.MessageEmbed().setColor("#7289DA").addFields( {name: "**Permissions Invalid**", value: "You do not have the required permission to run this command."})
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(ErrEm)
        const Target = message.mentions.users.first();
        const reason = args.slice(1).join(" ")
        if(Target){
            const BanEm = new Discord.MessageEmbed().setColor("#7289DA").addFields({name: "**Bannned**", vlaue:  Target + " has been banned from the server for " + reason})
            if(reason){
                const banLog = new Discord.MessageEmbed().setColor("#7289DA").setTitle("Ban").addFields({name: "Member", value:"<@" + Target.id + ">", inline:true}, {name: "Executor", value: "<@" + message.member +">", inline:true}, {name: "Reason", value:reason})
                const MTarget = message.guild.members.cache.get(Target.id)
                try{
                    MTarget.ban()
                    message.channel.send(BanEm)
                    client.channels.cache.get('849692382768267354').send(banLog)
                }catch(err){
                    console.log(err)
                    message.channel.send(ErrorEmbed)
                }
            }else{message.channel.send(NoClear)}
        }else{message.channel.send(NoClear)}
    }
}
