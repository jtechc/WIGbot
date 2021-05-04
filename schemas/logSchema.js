const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  channelId: {
    type: String,
    required: true
  },
  guildId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('log-channels', logSchema)