const Enemy = require('../models/enemy');

module.exports = {
  name: 'attack',
  description: 'attack an enemy',
  async execute(message, args) {
    const [target, attackDamage] = args;
    const enemy = await Enemy.findOne({ name: `${target}-${message.channel.id}` }).exec();
    if (!enemy) {
      message.channel.send('There is no target by that name');
    } else {
      const totalDamage = enemy.damage + parseInt(attackDamage);
      await enemy.update({ damage: totalDamage });
      message.channel.send(`${message.author} attacked the ${enemy.displayName} and they have taken ${totalDamage} total damage`);
    }
  },
};
