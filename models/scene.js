const mongoose = require('mongoose');

const SceneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true,
  },
  guildId: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  channelId: {
    type: String,
    required: true,
    trim: true,
  },
  dungeonMaster: {
    type: String,
    required: true,
    trim: true,
  },
});

const Scene = mongoose.model('Scene', SceneSchema);
module.exports = Scene;