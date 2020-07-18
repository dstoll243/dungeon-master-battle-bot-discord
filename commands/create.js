class Enemy {
  constructor(title, status) {
    this.title = title;
    this.damage = 0;
    this.effects = status;
  }
}

module.exports = {
  name: 'create',
  description: 'Create a new enemy',
  execute(message, args) {
    const enemy = new Enemy(args[0], args[1]);
    message.channel.send(`You've created a new ${enemy.title}\n...and he is afflicted with ${enemy.effects}, but has ${enemy.damage} damage`);
  },
};