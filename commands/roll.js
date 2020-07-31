module.exports = {
  name: 'roll',
  description: 'roll a dice',
  async execute(message, args) {
    const [maxValue] = args;
    const dice = parseInt(maxValue);
    if (isNaN(dice)) {
      message.channel.send('Please input a valid number');
    } else {
      const diceRoll = Math.ceil(Math.random() * dice);
      message.channel.send(`${message.author} has rolled a d${dice} and got a ${diceRoll}`);
    }
  },
};