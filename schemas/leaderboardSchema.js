const { Schema, model } = require('mongoose');

const leaderboard = new Schema({
  gId: String,
  leaderboardPoints: Number,
});

module.exports = model('leaderboardSchema', leaderboard);