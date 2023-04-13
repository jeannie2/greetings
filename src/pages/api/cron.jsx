// import { collection, getDocs, query, where } from 'firebase/firestore' // eslint-disable-line
// import { db } from '@/services/firebase' // eslint-disable-line

export default async function Cron(req, res) {
  try {
    /* const q = query(collection(db, 'greetings3'), where('message', '==', 'rainbow'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        ...doc.data()
      }
      console.log(data) // eslint-disable-line
    // mailer
    }) */
    res.json('Job Completed')
    //  )
  } catch (err) {
    console.log(err) // eslint-disable-line
    return res.status(400).json(err)
  }
}

/*
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
           user: process.env.EMAIL_USER, //put your mail here
           pass: process.env.EMAIL_PASSWORD,        //password here
  }
});

const setMailOptions = (data) => {
let mailOptions = {
from: xx,
to: data.recipientEmail,
subject: "New Greeting Card",
html: data.message
}
// '<p>hi your meeting in just 15 min</p>'
}

below inside cron.schedule:
transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err);
    else
      console.log(info);
});
*/
