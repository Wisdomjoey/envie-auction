import { createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { db } from "../../firebase";

export const createBid = createAsyncThunk(
  'bids/create',
  async ({}, {rejectWithValue}) => {
    try {
      await addDoc(collection(db, 'bids'), {
        id: '',
      }).then(async (value) => {
        await updateDoc(doc(db, 'bids', value.id), {
          id: value.id
        });
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
