const mailRouter = require('express').Router()
const nodemailer = require('nodemailer')
// const sendGridTransport = require('nodemailer-sendgrid-transport')
// const auth = {
//   type: 'oauth2',
//   user: '### your gmail address ###',
//   clientId: '### client ID ###',
//   clientSecret: '### client secret ###',
//   refreshToken: '### refresh token ###',
// };

const transport = nodemailer.createTransport({
  service: 'Gmail',
  //.env or other way to auth
  auth: {
    user: 'your-email@gmail.com', 
    pass: 'your-password' 
  }
})



mailRouter.post('/', async(req, res, next) => {
  const body = req.body
  // console.log(body)
  try {
     await transport.sendMail({
      to: 'xxx@gmail.com',
      subject: body.subject,
      html: `<h4>From:${body.email}</h4>
      <h4>${body.message}</h4>`
    })
    res.json({tes: 'test'})

  } catch (error) {
    console.log(error)
  }




})
module.exports = mailRouter
