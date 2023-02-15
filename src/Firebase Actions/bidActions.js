import { doc, addDoc, updateDoc, getDoc, deleteDoc, getDocs, collection } from "firebase/firestore";
import { auth, db } from "../firebase";

async function createBid(name, price, status) {
  try {
    await addDoc(doc(db, 'bids'), {
    id: '',
    userName: name,
    price: price,
    bidStatus: status,
    userId: auth.currentUser.uid,
          createdAt: Date.now().toString(),
          updatedAt: Date.now().toString(),
  }).then(async (docRef) => {
    await updateDoc(doc(db, 'bids', docRef.id), {
      id: docRef.id
    });
  });

  return { result: null, status: true };
  } catch (error) {
    return { result: error, status: false };
  }
}

async function getAllBids() {
  try {
    const querySnapshot = await getDocs(collection(db, "bids"));

  let bids = [];

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  bids.push(doc.data());
});

return { result: bids, status: true };
  } catch (error) {
    return { result: error, status: false }
  }
}

export { createBid, getAllBids }
