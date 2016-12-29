var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var router = express.Router();

module.exports = handleSendWeather;

app.use('/sayHello', router);
router.post('/', handleSendWeather); // handle the route at yourdomain.com/sayHello

function handleSendWeather(data) {
    // Not the movie transporter!
    var transporter = nodemailer.createTransport({
        service: '',
        auth: {
            user: '', // Your email id
            pass: '' // Your password
        }
    });

    var mailOptions = {
        from: '', // sender address
        to: '', // list of receivers
        subject: 'The Weather', // Subject line
        text: data //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
        };
    });
}
