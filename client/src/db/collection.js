
import { collection, addDoc } from "firebase/firestore";
import db from '../Firebase'



try {
  const docRef = await addDoc(collection(db, "favorites"), {
    favoriteId: "Ada"
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
