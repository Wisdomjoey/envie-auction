import { doc, setDoc, updateDoc, getDoc, addDoc, getDocs, collection, query, where } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth, db, storage } from "../firebase";

async function createUser(uid, name, phone, address, username, file, email, utility) {
  try {
    const storageRef = ref(storage, `verId/${uid}`);
    const storageRef1 = ref(storage, `utility/${uid}`);

    await uploadBytes(storageRef, file).then(async (value) => {
      await uploadBytes(storageRef1, utility).then(async (value1) => {
      const url = await getDownloadURL(storageRef);
      const url1 = await getDownloadURL(storageRef1);

        await setDoc(doc(db, 'users', uid), {
          id: uid,
          name: name,
          phoneNumber: phone,
          address: address,
          username: username,
          verificationId: url,
          utilityUrl: url1,
          verificationStatus: 'pending',
          accountNumber: '',
          email: email,
          bidsWon: [],
          createdAt: Date.now().toString(),
          updatedAt: Date.now().toString(),
        });
      });
    });

    return { result: null, status: true };
  } catch (error) {
    return { result: error, status: false };
  }
}

async function updateUser(data, userId) {
  await updateDoc(doc(db, 'users', userId), data).catch((e) => {

  });
}

async function getUser() {
  try {
    const id = auth.currentUser.uid;

    const userData = await getDoc(doc(db, 'users', id));

    return { result: userData.data(), status: true };
  } catch (error) {
    return { result: error, status: false };
  }
}

async function getUserByEmail(email) {
  try {
    const userData = await getDocs(query(collection(db, 'users'), where('email', '==', email)));

    return { result: userData.empty ? null : {...userData.docs[0].data()}, status: true };
  } catch (error) {
    return { result: error, status: false };
  }
}

async function getAllUsers() {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));

  let users = [];

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  users.push(doc.data());
});

return { result: users, status: true };
  } catch (error) {
    return { result: error, status: false }
  }
}

async function createBid(userId, auctionId, amount) {
  try {
    await addDoc(collection(db, 'users', userId, 'bids'), {
    id: '',
    auctionId: auctionId,
    amount: amount,
    bidStatus: 'ongoing',
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
  }).then(async (docRef) => {
    await updateDoc(doc(db, 'users', userId, 'bids', docRef.id), {
      id: docRef.id
    });
  });

  return {result: null, status: true};
  } catch (error) {
    return {result: error, status: false};
  }
}

async function getUserBids(userId) {
  try {
    const querySnapshot = await getDocs(collection(db, "users", userId, "bids"));

  let bids = [];

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  bids.push(doc.data());
});

  return { result: bids, status: true };
  } catch (error) {
    return {result: error, status: false};
  }
}

export { createUser, updateUser, getUser, createBid, getUserByEmail, getAllUsers, getUserBids }
