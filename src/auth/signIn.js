import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const signIn = async (email, password) => {

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return { user: result.user }; ;
  } catch (error) {
    console.error(error);
    throw error;
  }
}