var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'camerabot1@gmail.com',
    pass: 'XXXXX'
  }
});

var mailOptions = {
  from: 'camerabot1@gmail.com',
  to: 'archie.sinclair@gmail.com',
  subject: 'Timelapse Camera has not updated for 10 minutes',
  text: 'To investigate visit http://176.58.113.205'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
