import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { db } from "../../firebase";

export const createAuction = createAsyncThunk(
  'auctions/create',
  async ({name, desc, minBid, buyNowAmount, endTime, imgUrls, userId}, {rejectWithValue}) => {
    try {
      await addDoc(collection(db, 'auctions'), {
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
      }).then(async (value) => {
        await updateDoc(doc(db, 'auctions', value.id), {
          id: value.id
        });
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
