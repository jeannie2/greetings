// final card view for recipient (+ sender TBC)
// iframe src wld be in db, get from cardid

// create context
import { getFirestore, doc, updateDoc } from "firebase/firestore";
...
const data = {
  province: "ON"
};

updateDoc(docRef, data)
.then(docRef => {
    console.log("Value of an Existing Document Field has been updated");
})
.catch(error => {
    console.log(error);
})

export default FinalCardPage() {

}
