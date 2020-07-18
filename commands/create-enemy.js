const Enemy = require('../models/enemy');

module.exports = {
  name: 'create-enemy',
  description: 'Create a new enemy',
  async execute(message, args) {
    console.log('GUILD ID ---> ' + message);
    console.log('CHANNEL ID ---> ' + message.channel.id);
    const enemy = new Enemy({
      channelId: message.channel.id,
      name: args[0] || 'name',
      damage: 0,
    });
    // const enemy = new Enemy(args[0], args[1]);
    await enemy.save();
    message.channel.send(`You've created a new ${enemy.name}`);
  },
};