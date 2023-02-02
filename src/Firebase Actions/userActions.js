import { doc, setDoc, updateDoc, getDoc, addDoc } from "firebase/firestore";
import { db } from "../firebase";

async function createUser(uid, fname, lname, phone, address, username, verIdUrl, email) {
  await setDoc(doc(db, 'users', uid), {
    id: uid,
    firstname: fname,
    lastname: lname,
    phoneNumber: phone,
    address: address,
    username: username,
    verificationId: verIdUrl,
    verificationStatus: 'pending',
    accountNumber: '',
    email: email,
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  }).catch((e) => {
    
  });
}

async function updateUser(data, userId) {
  await updateDoc(doc(db, 'users', userId), data).catch((e) => {

  });
}

async function getUser(userId) {
  const userData = await getDoc(doc(db, 'users', userId));

  return userData;
}

async function createBid(userId, auctionId, amount) {
  await addDoc(doc(db, 'users', userId, 'bids'), {
    id: '',
    auctionId: auctionId,
    amount: amount,
    bidStatus: 'ongoing',
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  }).then(async (docRef) => {
    await updateDoc(doc(db, 'users', userId, 'bids', docRef.id), {
      id: docRef.id
    }).catch((e) => {

    })
  }).catch((e) => {

  })
}

export { createUser, updateUser, getUser, createBid }
