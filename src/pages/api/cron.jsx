import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/services/firebase'

export default async function Cron(req, res) {
  try {
    const q = query(collection(db, 'greetings2'), where('message', '==', 'rainbow'))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        ...doc.data()
      }

      // ! mailer

      return res.json('Job Completed')
    })
  } catch (err) {
    console.log(err) // eslint-disable-line
    return res.status(400).json(err)
  }
}
