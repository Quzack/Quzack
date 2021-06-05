const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'//prefix 
const token = ''//token 
const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Bot online.")
});

client.on('message', message => {
    if(message.mentions.has(client.user)) {message.channel.send("``My prefix is " + prefix + "``")}
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();

    if(command === "slowmode"){client.commands.get('slowmode').execute(message,args,Discord)}
    else if(command === "suggest"){client.commands.get('suggest').execute(message,args,Discord) }
    else if(command === "clear"){client.commands.get('clear').execute(message,args,Discord)}
    else if(command === "verify"){client.commands.get('verify').execute(message,args,Discord)}
    else if(command === "ban"){client.commands.get('ban').execute(message,args,Discord)}
    else if(command === "ping"){client.commands.get('ping').execute(message,args,Discord,client)}
});

client.login(token);
