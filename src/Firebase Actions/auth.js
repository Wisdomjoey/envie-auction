import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app, auth } from "../firebase";

async function registerUser(email, password) {
  try {
    const user = (await createUserWithEmailAndPassword(auth, email, password)).user;

    return { result: user, status: true};
  } catch (err) {
    return { result: err, status: false };
  }
}

async function loginUser(email, password) {
  try {
  const user = (await signInWithEmailAndPassword(auth, email, password)).user;

    return { result: user, status: true};
  } catch (err) {
    return { result: err, status: false };
  }
}

async function signOutUser() {
  await signOut(auth).catch((e) => {
    console.log(e);
  });
}

export { registerUser, loginUser, signOutUser };