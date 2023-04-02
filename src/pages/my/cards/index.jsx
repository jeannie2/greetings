// get id of logged in user and display all cards with that userId

const getMyCards = async () => {
  const q = query(collection(db, 'users'), where('first', '==', 'sarah')) // userId == currently logged in user

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => `, doc.data())
  })
}
