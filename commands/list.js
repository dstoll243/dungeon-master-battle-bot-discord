const Enemy = require('../models/enemy');

module.exports = {
  name: 'list',
  description: 'list out all the enemies',
  async execute(message) {
    const enemies = await Enemy.find({ channelId: message.channel.id });
    if (enemies.length < 1) {
      message.channel.send('You have vanquished all of your foes');
    } else {
      for (const enemy of enemies) {
        setTimeout(() => {
          message.channel.send(`${enemy.displayName} - ${enemy.damage} damage taken`);
        }, 1000);
      }
    }
  },
};
