import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from "../../firebase";

export const register = createAsyncThunk(
  'auth/register',
  async ({email, password}, {rejectWithValue}) => {
    try {
      const res = await new Promise(() => setTimeout(() => {
        return 5;
      }, 3000));

      console.log(res);
      
      return res;
      // const auth = getAuth(app);
      // const user = (await createUserWithEmailAndPassword(auth, email, password)).user;

      // return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)
