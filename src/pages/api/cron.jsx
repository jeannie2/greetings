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
