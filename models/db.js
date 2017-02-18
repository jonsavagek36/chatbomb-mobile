let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let User = new Schema({
  user_id: ObjectId,
  facebook_id: String,
  screen_name: String,
  email: String,
  friends: Array,
  requests: Array,
  points: Number,
  updated_at: Date
});

mongoose.model('User', User);
mongoose.connect('mongodb://localhost:27017/chatbomb_dev');
