import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { firebaseAuth } from "./Firebase";

const provider = new GoogleAuthProvider();

export const signinRedirect = signInWithRedirect(firebaseAuth, provider);
