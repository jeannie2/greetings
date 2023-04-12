require('dotenv').config()
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'jnam820@gmail.com', // Change to your recipient
  from: 'jeanniejnam@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>'
}

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode) // eslint-disable-line
    console.log(response[0].headers) // eslint-disable-line
  })
  .catch((error) => {
    console.error(error) // eslint-disable-line
  })
