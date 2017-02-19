let mongoose = require('mongoose');
let User = mongoose.model('User');
let Invite = mongoose.model('Invite');

exports.add_user = function(req, res) {
  new User({
    facebook_id: req.body.facebook_id,
    screen_name: req.body.screen_name,
    email: req.body.email,
    friends: [],
    requests: [],
    points: 0,
    updated_at: Date.now()
  }).save(function(err, result, count) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}
