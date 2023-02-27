import { doc, addDoc, updateDoc, getDoc, deleteDoc, getDocs, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../firebase";

async function createAuction(name, desc, minBid, buyNowAmount, endTime, imgs, userId) {
  try {
    var imgUrls = [];

    for (let index = 0; index < imgs.length; index++) {
      const storageRef = ref(storage, `auctions/${userId}/${imgs[index].name}`);

      await uploadBytes(storageRef, imgs[index]);
      var url = await getDownloadURL(storageRef);

      imgUrls.push(url);
    }

    await addDoc(collection(db, 'auctions'), {
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
  await updateDoc(doc(db, 'auctions', id), data);
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
  if(doc.get('reviewStatus') === 'verified' && !(doc.get('bidEndTime') - Date.now() < 0)) {
    auctions.push(doc.data());
  }
});

return { result: auctions, status: true };
  } catch (error) {
    return { result: error, status: false }
  }
}

async function deleteAuction(id) {
  await deleteDoc(doc(db, 'auctions', id));
}

export { createAuction, updateAuction, getAuction, deleteAuction, getAllAuctions }
