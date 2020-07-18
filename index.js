require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const TOKEN = process.env.TOKEN;
// const Enemy = require('./commands/battle.js');
// const create = require('./commands/create');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.login(TOKEN);

const PREFIX = '/';

client.on('ready', () => {
  console.info(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  // exit early if message does not start with prefix or is authored by a bot user.
  console.log(message.author);
  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'create') {
    client.commands.get('create').execute(message, args);
    console.log('IN CREATE ROUTE');
    console.log(args);
    // message.channel.bulkDelete(3);
    // if (message.mentions.users.size) {
    //   const taggedUser = message.mentions.users.first();
    //   message.channel.send(`You wanted to kick: ${taggedUser.username}`);
    // } else {
    //   message.reply('Please tag a valid user!');
    // }
  }
});
