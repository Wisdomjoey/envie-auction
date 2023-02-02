import { doc, addDoc, updateDoc, getDoc, deleteDoc, getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

async function createAuction(name, desc, minBid, buyNowAmount, endTime, imgUrls, userId) {
  await addDoc(doc(db, 'auctions'), {
    id: '',
    name: name,
    description: desc,
    minBidAmount: minBid,
    buyNowAmount: buyNowAmount,
    bidEndTime: endTime,
    bids: [],
    reviewStatus: 'pending',
    images: imgUrls,
    userId: userId
  }).then(async (docRef) => {
    await updateDoc(doc(db, 'auctions', docRef.id), {
      id: docRef.id
    }).catch((e) => {

    })
  }).catch((e) => {

  });
}

async function updateAuction(id, data) {
  await updateDoc(doc(db, 'auctions', id), data).catch((e) => {

  });
}

async function getAuction(id) {
  const auctionData = await getDoc(doc(db, 'auctions', id));

  return auctionData;
}

async function getAllAuctions() {
  const querySnapshot = await getDocs(collection(db, "auctions"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
}

async function deleteAuction(id) {
  await deleteDoc(doc(db, 'auctions', id)).catch((e) => {});
}

export { createAuction, updateAuction, getAuction, deleteAuction, getAllAuctions }
