module.exports = {
    name: 'verify',
    description: "Verify yourself to gain access to the server",
    execute(message,args,Discord){
        const Vrole = ""//set role id
        const VerEmbed = new Discord.MessageEmbed().setColor("#7289DA").addFields({name: "**Error**",value: "You are already verified." })
        if(message.member.roles.cache.has(Vrole)){
            message.channel.send(VerEmbed);
        } else{
            const Verified = new Discord.MessageEmbed().setColor("#7289DA").addFields({name:"**Verified**", value: "You have succesfully been verified , enjoy your stay."})
            message.member.roles.add(Vrole)
            message.channel.send(Verified)
        }
    }
}
