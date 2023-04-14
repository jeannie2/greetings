import { collection, getDocs, query, where, updateDoc } from 'firebase/firestore' // eslint-disable-line
import { db } from '@/services/firebase' // eslint-disable-line
import moment from 'moment'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export default async function Cron(req, res) {
  const currentDate = moment().format('DD MM YYYY')

  const transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
})

const setMailOptions = (doc) => {
  const mailOptions = {
    from: 'new-greetings@outlook.com',
    to: 'new-greetings@outlook.com',
    subject: doc.message,
    html: `<p>you've received a new card! <a href='https://greetings-rho.vercel.app/final/${doc.id}'>Click here</a> to view </p>`
  }
  return mailOptions
}

const markAsScheduled = async (doc) => {
  console.log("doc.id: " + doc.id) //eslint-disable-line
  try {
    await updateDoc(doc(db, 'greetings3', doc.id), {
      scheduled: true
    })
  } catch (e) {
    console.log(e) //eslint-disable-line
  }
}

try {
  const q = query(collection(db, 'greetings3'), where('deliveryDate', '==', currentDate), where('scheduled', '==', false))
  // const q = query(collection(db, 'greetings3'), where('scheduled', '==', 'false'), where('deliveryDate', 'array-contains', currentDate))
  // .where('deliveryDate', '<=', currentDate)) // where('scheduled', '==', false))
  // where('deliveryDate', 'array-contains', currentDate))
  const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        ...doc.data()
      }
  console.log(`data${data}`)
  // mailOptions = setMailOptions(data)
  transporter.sendMail(setMailOptions(doc), (err, info) => { // setMailOptions(data)
    if (err) {
      console.log(err)  // eslint-disable-line
    } else { console.log(info) }  // eslint-disable-line
  })
  markAsScheduled(doc) // how run after above done?
})

res.json('Job Completed')
} catch (err) {
  console.log(err) // eslint-disable-line
  return res.status(400).json(err)
}
}

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
