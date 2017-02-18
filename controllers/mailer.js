let nodemailer = require('nodemailer');
let mongoose = require('mongoose');
let Invite = mongoose.model('Invite');

let smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: '',
    pass: ''
  }
});

exports.send_invite = function(req, res) {
  let message = `A friend invited you to Chatbomb.<br /><a href='http://localhost:5000/accept_invite?code=${req.body.code}'>Click here</a>`;
  let mailOptions = {
    to: req.body.to,
    subject: 'You got Chatbombed'
    html: message
  };
  smtpTransport.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: 'Invite sent!' });
    }
  });
}

exports.accept_invite = function(req, res) {
  let code_id = req.param('code');
  Invite.find({ code: code_id }, function(err, result, count) {
    if (err) {
      // NO SUCH INVITE
    } else {
      // SEND TO SIGN UP
    }
  })
}
