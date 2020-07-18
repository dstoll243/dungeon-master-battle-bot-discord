const Scene = require('../models/scene');
// class Enemy {
//   constructor(title, status) {
//     this.title = title;
//     this.damage = 0;
//     this.effects = status;
//   }
// }

module.exports = {
  name: 'create-scene',
  description: 'Create a new scene',
  async execute(message, args) {
    console.log('GUILD ID ---> ' + message);
    console.log('CHANNEL ID ---> ' + message.channel.id);
    const scene = new Scene({
      channelId: message.channel.id,
      guildId: message.channel.guild.id,
      dungeonMaster: message.author,
      name: args[0] || 'name',
    });
    // const enemy = new Enemy(args[0], args[1]);
    await scene.save();
    message.channel.send(`You've created a new ${scene.name}`);
  },
};