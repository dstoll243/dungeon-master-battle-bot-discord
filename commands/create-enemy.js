const Enemy = require('../models/enemy');

module.exports = {
  name: 'create-enemy',
  description: 'Create a new enemy',
  async execute(message, args) {
    if (!args[0]) {
      return message.channel.send('You need to include the enemy names.');
    }
    for (let i = 0; i < args.length; i++) {
      const enemy = new Enemy({
        channelId: message.channel.id,
        displayName: args[i],
        name: `${args[i]}-${message.channel.id}`,
        damage: 0,
      });
      await enemy.save(err => {
        if (err) {
          return message.channel.send(`${args[i]} already exists`);
        } else {
          message.channel.send(`A ${enemy.displayName} awaits you for battle`);
        }
      });
    }
  },
};