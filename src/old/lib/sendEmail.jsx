import axios from 'axios'

const sendEmail = async (email, subject, message) => axios({
  method: 'post',
  url: '/api/send-mail',
  data: {
    email,
    subject,
    message
  }
})

export default sendEmail
