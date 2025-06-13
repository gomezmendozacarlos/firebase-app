import { auth } from '../firebaseConfig';

export const addAuthListener = async (callback) => {
  const onChange = (user) => {
    if (user) {
      callback(user);
    } else {
      callback(null);
    }
  };

  return auth.onAuthStateChanged(onChange);
}
