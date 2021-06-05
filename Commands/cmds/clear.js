module.exports = {
    name: 'clear',
    description: "Clears an amount of messages in a channel",
    execute(message,args,Discord){
        const ErrEm = new Discord.MessageEmbed().setColor("#7289DA").addFields( {name: "**Permissions Invalid**", value: "You do not have the required permission to run this command."})
        const NoClear = new Discord.MessageEmbed().setColor("#7289DA").addFields({name: "**No set number**", value: "You need to set a valid number above 1 and below 150"});
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(ErrEm);
        if(!args[0]) return message.channel.send(NoClear);
        if(args[0] > 150) return message.channel.send(NoClear);
        if(args[0] < 0) return message.channel.send(NoClear);
        const Clearset = new Discord.MessageEmbed().setColor("#7289DA").addFields({name: "**Cleared**",value: "Cleared **" + args[0] + "** messages from chat"})
        if(args[1]){
            let channel = message.mentions.channel.first();
            channel.bulkDelete(args[0]);
            message.channel.send(Clearset);
        }else{
            message.channel.bulkDelete(args[0]);
            message.channel.send(Clearset);
        }
    }
}
