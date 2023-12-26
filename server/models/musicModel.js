const mongoose = require('mongoose');

// Define Music Track Schema
const musicSchema = new mongoose.Schema({
  title: String,
  artist: String,
  url: String,
});

const Music = mongoose.model('Music', musicSchema);
module.exports = Music;


