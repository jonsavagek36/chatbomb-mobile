let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let User = new Schema({
  facebook_id: String,
  screen_name: String,
  email: String,
  friends: Array,
  requests: Array,
  points: Number,
  updated_at: Date
});

let Invite = new Schema({
  email: String,
  updated_at: Date
});

mongoose.model('User', User);
mongoose.model('Invite', Invite);
mongoose.connect('mongodb://localhost:27017/chatbomb_dev');
