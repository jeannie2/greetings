import { collection, getDocs, query, where, updateDoc } from 'firebase/firestore' // eslint-disable-line
import { db } from '@/services/firebase' // eslint-disable-line
// import moment from 'moment'
import nodemailer from 'nodemailer'
// import dotenv from 'dotenv'

// dotenv.config()

export default async function Cron(req, res) {
 // const currentDate = moment().format('DD MM YYYY')

  const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

const mailOptions = {
    from: 'new-greetings@outlook.com',
    to: 'new-greetings@outlook.com',
    subject: 'HELLO',
    text: 'ee'
  }

/* const setMailOptions = (doc) => {
  const mailOptions = {
    from: 'new-greetings@outlook.com',
    to: 'new-greetings@outlook.com',
    subject: "HELLO"

  }
  return mailOptions
} */

/* const markAsScheduled = async (doc) => {
  console.log("doc.id: " + doc.id) //eslint-disable-line
  try {
    await updateDoc(doc(db, 'greetings3', doc.id), {
      scheduled: true
    })
  } catch (e) {
    console.log(e) //eslint-disable-line
  }
} */

try {
transporter.sendMail(mailOptions)
res.json('Job Completed')
} catch (err) {
  console.log(err) // eslint-disable-line
  return res.status(400).json(err)
}
}

/*

 // markAsScheduled(doc) // how run after above done?
}) */
/*
export default async function Cron(req, res) {
  // const currentDate = moment().format('DD MM YYYY')
  try {
    const q = query(collection(db, 'greetings3'), where('message', '==', 'rainbow'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        ...doc.data()
      }
      console.log(data) // eslint-disable-line
    // mailer
    })
    res.json('Job CompletedEX')
    //  )
  } catch (err) {
    console.log(err) // eslint-disable-line
    return res.status(400).json(err)
  }
}
*/

/* html: `
    <html>
    <body>
    <p>you've received a new card! <a href='https://greetings-rho.vercel.app/final/${doc.id}'>Click here</a> to view </p>
    </body>
    </html>` */
