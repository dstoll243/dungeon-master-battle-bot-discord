const Enemy = require('../models/enemy');

module.exports = {
  name: 'list',
  description: 'list out all the enemies',
  async execute(message) {
    const enemies = await Enemy.find({ channelId: message.channel.id });
    console.log({ enemies });
    for (const enemy of enemies) {
      message.channel.send(`${enemy.name} - ${enemy.damage} damage taken`);
    }
  },
};
