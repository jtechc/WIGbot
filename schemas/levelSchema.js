const { Schema, model } = require('mongoose');

const levelSchema = new Schema({
  gId: String,
  uId: String,
  currentXp: String
});

module.exports = model('levels', levelSchema);