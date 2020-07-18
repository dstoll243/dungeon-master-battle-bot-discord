const mongoose = require('mongoose');

const EnemySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  channelId: {
    type: String,
  },
  damage: {
    type: Number,
  },
});

const Enemy = mongoose.model('Enemy', EnemySchema);

module.exports = Enemy;