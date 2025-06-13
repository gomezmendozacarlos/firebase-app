import { auth } from '../firebaseConfig';

export const getUser = () => {
  const user = auth.currentUser
  if (!user) return null
  
  return {}
}