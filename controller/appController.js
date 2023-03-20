const nodemailer = require('nodemailer')
const {EMAIL,PASSWORD} = require('../router/env')

// send mail from testing account
const signup = async (req, res) => {

    // testing account
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let message = {
        from: '"Sandra" <sandrak19051999@gmail.com>', // sender address
        to: "sandraksathish99@gmail.com, baz@example.com", // list of receivers
        subject: "Register Mail", // Subject line
        text: "Successfully Register with us", // plain text body
        html: "<b>Successfully Register with us</b>", // html body
    }

    transporter.sendMail(message).then((info) => {
        return res.status(201)
        .json({
            msg: "you should receive an email ",
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })

    }).catch(error => {
        return res.status(500).json({ error })
    })

}

// send mail from real gmail account
const getbill = (req, res) => {

    let confi = {
        service : 'gmail',
        auth : {
            user: 'EMAIL',
            pass: 'PASSWORD'
        }
    }

    let transporter = nodemailer.createTransport(config)

    res.status(201).json({ message: 'Bill fetched successfully.' });
}

module.exports = {
    signup,
    getbill
}
