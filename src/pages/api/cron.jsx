import { collection, getDocs, query, where } from 'firebase/firestore' // eslint-disable-line
import { db } from '@/services/firebase' // eslint-disable-line
// import moment from 'moment'
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';
// dotenv.config();

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

/*
export default async function Cron(req, res) {

  const currentDate = moment().format('DD MM YYYY')

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  }
});

const setMailOptions = (doc) => {
let mailOptions = {
from: xx,
to: doc.recipientEmail,
subject: "New Greeting Card",
html: "<p>you've received a new card! <a href=https://greetings-rho.vercel/final/{doc.id}.app>Click here</a> to view" </p>
}

const markAsScheduled = async (doc) => {
  console.log("doc.id: " + doc.id) //eslint-disable-line
  try {
    await updateDoc(doc(db, 'greetings3', doc.id), {
      scheduled: true
    })
  } catch(e) {
    console.log(e) //eslint-disable-line
  }
}

try {
const q = query(collection(db, 'greetings3'), where('scheduled', '==', false).where('deliveryDate', "array-contains", currentDate)

const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        ...doc.data()
      }

let mailOptions = setMailOptions(data)

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err);
    else
      console.log(info);
  });

markAsScheduled(doc) // how run after above done?

})
res.json('Job Completed')
} catch (err) {

}

*/
