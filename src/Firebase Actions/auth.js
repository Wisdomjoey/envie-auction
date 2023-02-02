import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function registerUser(email, password) {
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
  }).catch((e) => {
    console.log(e);
  });
}

function loginUser(email, password) {
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
  }).catch((e) => {
    console.log(e);
  });
}

function signOutUser() {
  const auth = getAuth();

  signOut(auth).then(() => {

  }).catch((e) => {
    console.log(e);
  });
}

export { registerUser, loginUser, signOutUser };