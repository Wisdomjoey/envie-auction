import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore/lite";
import { db } from "../../firebase";

export const addUser = createAsyncThunk(
  'user/add',
  async ({name, phone, email, address, userId, username, file}, {rejectWithValue}) => {
    try {
      await setDoc(collection(db, 'users'), {
        id: userId,
        name: name,
        phoneNumber: phone,
        address: address,
        username: username,
        verificationId: '',
        verificationStatus: 'pending',
        accountNumber: '',
        email: email,
        createdAt: Date.now().toString(),
        updatedAt: Date.now().toString(),
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editUser = createAsyncThunk(
  'user/edit',
  async ({userId, data}, {rejectWithValue}) => {
    try {
      await updateDoc(doc(db, 'users', userId), data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk(
  'user/get',
  async (userId, {rejectWithValue}) => {
    try {
      const docSnap = await getDoc(doc(db, 'users', userId));

      return docSnap;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'user/delete',
  async (userId, {rejectWithValue}) => {
    try {
      await deleteDoc(doc(db, 'users', userId));
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
