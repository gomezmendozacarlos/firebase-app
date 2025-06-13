import { auth } from '../firebaseConfig';


export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error + 'An error occurred while signing out');
  }
} 




