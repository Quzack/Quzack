module.exports = {
  name: 'mute',
  description: "Mute a member",
  execute(message,args,Discord){
    var muteRole = "" //add mute role id
    const target = message.mentions.users.first();
    const reason = args.splice(1).join(" ");
    const ErrEM = new Discord.MessageEmbed().setColor("#7289DA").addFields({name: "Error", value: "You do not have permissions to run this command"})
    const muted = new Discord.MessageEmbed().setColor("#7289DA").addFields({name: "Muted", value: "<@" + target + ">" + "has been muted for " + reason)}
    if(!message.member.hasPermission("MANAGE_MESSAGES") return message.channel.send(ErrEM);
    if(!target) return message.reply("Ping a member.");
    if(!reason) return message.reply("Always set a reason.");
    let talkRole = "" // set an id
    let muteRole = "" //set an id
    const memT = message.guild.members.cache.get(target.id)
    
    memT.roles.remove(talkRole);
    memT.roles.add(muteRole);
    message.channelsend(muted);
    
  }
}
