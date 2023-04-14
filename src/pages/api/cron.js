import { collection, getDocs, query, where, updateDoc, doc } from 'firebase/firestore' // eslint-disable-line
import { db } from '@/services/firebase' // eslint-disable-line
import nodemailer from 'nodemailer'
// import moment from 'moment'
// import { useState } from 'react'

export default async function Cron(req, res) {
// export default async (req, res) => {
  // const [cards, setTodaysCards] = useState(null)
  // const currentDate = moment().format('DD MMM YYYY') // not MM
 // const { name, email, message } = req.body

/* function setMailOptions(data) {
      const mailOptions = {
      from: process.env.EMAIL_USER, // 'greetingcardsmessage@zohomail.in',
      to: process.env.EMAIL_USER, // 'greetingcardsmessage@zohomail.in',
      subject: 'new e-card!',
      text: data.recipientName
    }
    return mailOptions
  } */

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
  // const todaysCards = []
  const q = query(collection(db, 'greetings3'), where('deliveryDate', '==', '20 Apr 2023'), where('scheduled', '==', false))
  // const q = query(collection(db, 'greetings3'), where('scheduled', '==', 'false'), where('deliveryDate', 'array-contains', currentDate))
  // .where('deliveryDate', '<=', currentDate)) // where('scheduled', '==', false))
  // where('deliveryDate', 'array-contains', currentDate))
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach(() => {
    const data = {
      id: doc.id,
      ...doc.data()
    }
    console.log(data)
  /* querySnapshot.forEach(doc => {
      let data = doc.data()
    }) */
  //  const data = doc.data() // one docs data
   // transporter.sendMail(setMailOptions(data))
  setTimeout(() => {
      transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'new e-cards for you!',
        text: data.recipientName
    })
    markAsScheduled(data)
  }, 10000)
  })
  // mark
  return res.json('TRUES')
} catch (err) {
    console.log(err) // eslint-disable-line
  return res.status(400).json(err)
  }
//  return null
}

  /* const transporterOld = nodemailer.createTransport({
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
}) */
