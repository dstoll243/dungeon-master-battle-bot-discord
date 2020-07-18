const { execute } = require("./create-scene");

const Enemy = require('../models/enemy');

module.exports = {
  name: 'kill',
  description: 'eliminate your enemy',
  async execute(message, args) {
    const enemy = await Enemy.findOne({ name: args[0] }).exec();
    if (!enemy) {
      message.channel.send('That enemy does not exist to murder');
    } else {
      await Enemy.deleteOne({ name: enemy.name });
      message.channel.send(`Oh my God! ${message.author} killed ${enemy.name}`);
    }
  },
};