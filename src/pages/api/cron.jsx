import { collection, getDocs, query, where, updateDoc, doc } from 'firebase/firestore'
import { db } from '@/services/firebase'
import nodemailer from 'nodemailer'
import moment from 'moment'

export default async function Cron(req, res) {
  const currentDate = moment().format('DD MMM YYYY') // not MM

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

  const markAsScheduled = async (data) => {
    // console.log("doc.id: " + doc.id) //eslint-disable-line
    try {
      await updateDoc(doc(db, 'greetings3', data.id), {
        scheduled: true
      })
    } catch (e) {
      console.log(e) //eslint-disable-line
    }
  }

  try {
  const q = query(collection(db, 'greetings3'), where('deliveryDate', '==', currentDate), where('scheduled', '==', false))
  const querySnapshot = await getDocs(q)
   querySnapshot.forEach((doc) => { // keep doc
  const data = {
      id: doc.id,
      ...doc.data()
    }
    console.log(data) //eslint-disable-line
    transporter.sendMail({
        from: process.env.EMAIL_USER,
        bcc: process.env.EMAIL_USER, // to
        subject: 'New E-card Notificationxx',
        text: data.recipientName
    })
    markAsScheduled(data)
  })
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
