module.exports = {
  name: 'roll',
  description: 'rolls dice',
  async execute(message, args) {
    
    for (let i = 0; i < args.length; i++) {
      const validDice = [100, 20, 12, 10, 8, 6, 4];
      const dice = parseInt(args[i]);
      if (!validDice.includes(dice)) {
        message.channel.send('Please input a valid dice');
      } else {
        const diceRoll = Math.ceil(Math.random() * dice);
        message.channel.send(`${message.author} has rolled a d${dice} and got a ${diceRoll}`);
      }
    }
  },
};