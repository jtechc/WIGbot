const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  _id: {
    type: mongoose.SchemaTypes.ObjectId,
    required: false
  },
  guildId: {
    type: mongoose.SchemaTypes.String,
    required: true
  },
  logChannel: {
    type: mongoose.SchemaTypes.String,
    required: true
  }
});

module.exports = mongoose.model('log', logSchema);