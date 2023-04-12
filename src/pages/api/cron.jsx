import { getDocs, query, where, collection } from 'firebase/firestore'
import { db } from '@/services/firebase'

export default function Cron() {
  const [error, setError] = useState(null)

  const getCardsToSend = async () => {
    // if(user?.uid)
    try {
      const cardsGroup = []

      const q = query(collection(db, 'greetings2'), where('deliveryDate', '==', today))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => cardsGroup.push({
        id: doc.id,
        ...doc.data()
      }))
    } catch (err) {
      console.log(err)
      setError(err)
    }
  }
}
