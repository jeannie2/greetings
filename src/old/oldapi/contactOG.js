import nodemailer from 'nodemailer'

export default async (req, res) => {
  const { name, email, message } = req.body

  /* const transporterOld = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'jeanniejnam@gmail.com' // process.env.SMTP_USER,
      // pass:  application specific password. process.env.SMTP_PASSWORD
    }
  }) */

const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

  try {
    await transporter.sendMail({
      from: email,
      to: 'example@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `
    })
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
  return res.status(200).json({ error: '' })
}