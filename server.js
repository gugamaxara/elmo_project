const express = require('express')
const path = require('path');
const app = express()
const port = 3000

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/build/index.html'));
    // res.send('Hello World!')

});

app.get('/sendmail/', (req, res) => {
    // var mailOptions = {
    //     from: 'youremail@gmail.com',
    //     to: 'myfriend@yahoo.com',
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy!'
    // };
      
    // transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // });
    // console.log(req.query)
    // res.send('Hello World')
    // return res
    console.log(req.query.name)
    return res.json(req.query.name);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))