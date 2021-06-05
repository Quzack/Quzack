module.exports = {
    name: 'suggest',
    aliases: 'suggestion',
    description: "Creates a suggestion in the suggest channel",
    execute(message,args,discord){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!channel) return message.channel.send('create a channel named #suggestions');

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed().setColor('#7289DA').setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true })).setDescription(messageArgs);
        channel.send(embed).then(msg =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            console.log(err)
        });
    }
}
