import { collection, getDocs, query, where, updateDoc, doc } from 'firebase/firestore'
import { db } from '@/services/firebase'
import nodemailer from 'nodemailer'
// import moment from 'moment'

export default async function Cron(req, res) {
  // const currentDate = moment().format('DD MMM YYYY') // not MM

  const transporter = nodemailer.createTransport({
    pool: true,
    maxConnections: 20,
    maxMessages: Infinity,
    service: 'outlook',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  })

  try {
    const docsData = []

    const q = query(collection(db, 'greetings3'), where('opened', '==', true), where('notifiedSender', '==', false))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((result) => docsData.push({ id: result.id, ...result.data() }))

    for (let i = 0; i < docsData.length; i += 1) {
      const data = docsData[i]
      console.log('Doc ID', data.id) // eslint-disable-line

      try {
        const mailResult = await transporter.sendMail({
          from: process.env.EMAIL_USER,
          bcc: data.senderEmail, // process.env.EMAIL_USER
          subject: 'E-card Opened Confirmation',
          attachments: [{
            filename: 'flowers.png',
            path: 'https://i.imgur.com/3LBALRI.png',
            cid: 'flowers'
          }],
          html: `
            <html>
              <body>
              <table width='100%' height='100%' border='0' cellspacing='0' cellpadding='0' style='background:#000000'>
                <tr height='90%'>
                <td style='padding:40px 40px 40px 40px'>
                <tr height='10%'>
                <td align='center'>
                <img src="cid:flowers" style='width:250px; padding: 40px 40px 40px 40px'>
                <p style='font-size:15px; font-family:arial black; color:#FFFFFF; font-style: italic'>Hi ${data.senderName}, <br> ${data.recipientName} has opened your e-card! <br> To browse more cards visit <a style='text-decoration:none; color: #ADD8E6' href='https://greetings-rho.vercel.app/'> our website </a>.
                </p>
                </td>
                </tr>

                </td>
                </tr>
              </table>
              </body>
            </html>
          `// text: data.recipientName
        })
        console.log('Mail Result', mailResult) // eslint-disable-line
      } catch (mailErr) {
        console.log('Mail Error', mailErr) // eslint-disable-line
      }

      try {
        const updateResult = await updateDoc(doc(db, 'greetings3', data.id), {
          notifiedSender: true
        })
        console.log('Update Result', updateResult) // eslint-disable-line
      } catch (updateErr) {
        console.log('Update Error', updateErr) // eslint-disable-line
      }
    }

    return res.json('job completed')
  } catch (err) {
    console.log(err) // eslint-disable-line
    return res.status(400).json(err)
  }
}

/*
querySnapshot.forEach((doc) => {
    const data = doc.data()
  setTimeout(() => {
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'new e-cards just for you!',
        text: data.recipientName
    })
    markAsScheduled(data)
  }, 60000)

  --
  const q = query(collection(db, 'greetings3'), where('scheduled', '==', 'false'), where('deliveryDate', 'array-contains', currentDate))
  .where('deliveryDate', '<=', currentDate)) // where('scheduled', '==', false))
  where('deliveryDate', 'array-contains', currentDate))

  const transporterOld = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'jeanniejnam@gmail.com' // process.env.SMTP_USER,
      // pass:  application specific password. process.env.SMTP_PASSWORD
    }
  }) */
  /* const transporter = nodemailer.createTransport({
  service: 'smtp.zoho.com', //'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

const todaysCards = []

function setMailOptions(data) {
      const mailOptions = {
      from: process.env.EMAIL_USER, // 'greetingcardsmessage@zohomail.in',
      to: process.env.EMAIL_USER, // 'greetingcardsmessage@zohomail.in',
      subject: 'new e-card!',
      text: data.recipientName
    }
    return mailOptions
  }

  querySnapshot.forEach(doc => {
      let data = doc.data()
    })
    const data = doc.data() // one docs data
    transporter.sendMail(setMailOptions(data))
  */
