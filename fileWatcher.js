var fs = require("fs"); //Load the filesystem module
var nodemailer = require('nodemailer'); //Load email module

file1 = [0]
file2 = [0]
file3 = [0]
file4 = [0]
file5 = [0]

//configuration for email server settings
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'camerabot1@gmail.com',
    pass: 'XXXXXXXXXX'
  }
});

var mailOptions = {
  from: 'camerabot1@gmail.com',
  to: 'archie.sinclair@gmail.com',
  subject: 'Timelapse Camera has not updated for 10 minutes',
  text: 'To investigate visit http://176.58.113.205'
};


setInterval(function checksize () {
  var stats = fs.statSync("GM_DIR01/log.txt");
  var fileSizeInBytes = stats["size"];
  if (fileSizeInBytes <= file1) {
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  file1 = fileSizeInBytes;
  console.log(file1);
  },
  600000);

setInterval(function checksize () {
  var stats = fs.statSync("GM_DIR02/log.txt");
  var fileSizeInBytes = stats["size"];
  if (fileSizeInBytes <= file2) {
    console.log('send email')
  }
  file2 = fileSizeInBytes;
  console.log(file2);
  },
  600000);
setInterval(function checksize () {
  var stats = fs.statSync("GM_DIR03/log.txt");
  var fileSizeInBytes = stats["size"];
  if (fileSizeInBytes <= file1) {
    console.log('send email')
  }
  file1 = fileSizeInBytes;
  console.log(file1);
  },
  600000);

setInterval(function checksize () {
  var stats = fs.statSync("GM_DIR04/log.txt");
  var fileSizeInBytes = stats["size"];
  if (fileSizeInBytes <= file2) {
    console.log('send email')
  }
  file2 = fileSizeInBytes;
  console.log(file2);
  },
  600000);

setInterval(function checksize () {
  var stats = fs.statSync("GM_DIR04/log.txt");
  var fileSizeInBytes = stats["size"];
  if (fileSizeInBytes <= file2) {
    console.log('send email')
  }
  file2 = fileSizeInBytes;
  console.log(file2);
  },
  600000);
