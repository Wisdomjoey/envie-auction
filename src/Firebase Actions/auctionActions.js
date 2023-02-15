import { doc, addDoc, updateDoc, getDoc, deleteDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

async function createAuction(name, desc, minBid, buyNowAmount, endTime, imgUrls, userId) {
  try {
    await addDoc(doc(db, 'auctions'), {
    id: '',
    name: name,
    description: desc,
    minBidAmount: minBid,
    buyNowAmount: buyNowAmount,
    bidEndTime: endTime,
    bids: [],
    reviewStatus: 'pending',
    status: '',
    images: imgUrls,
    userId: userId,
          createdAt: Date.now().toString(),
          updatedAt: Date.now().toString(),
  }).then(async (docRef) => {
    await updateDoc(doc(db, 'auctions', docRef.id), {
      id: docRef.id
    });
  });

  return { result: null, status: true };
  } catch (error) {
    return { result: error, status: false };
  }
}

async function updateAuction(id, data) {
  await updateDoc(doc(db, 'auctions', id), data).catch((e) => {

  });
}

async function getAuction(id) {
  try {
    const auctionData = await getDoc(doc(db, 'auctions', id));

  return { result: auctionData.data(), status: true };
  } catch (error) {
    return { result: error, status: false };
  }
}

async function getAllAuctions() {
  try {
    const querySnapshot = await getDocs(collection(db, "auctions"));

  let auctions = [];

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  auctions.push(doc.data());
});

return { result: auctions, status: true };
  } catch (error) {
    return { result: error, status: false }
  }
}

async function deleteAuction(id) {
  await deleteDoc(doc(db, 'auctions', id)).catch((e) => {});
}

export { createAuction, updateAuction, getAuction, deleteAuction, getAllAuctions }
