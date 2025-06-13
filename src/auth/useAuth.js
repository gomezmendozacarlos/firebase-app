import {useState, useEffect} from 'react';
import { getUser } from './getCurrentUser';
import { addAuthListener } from './authListener';

export const useAuth = () => {
  const [authInfo, setAuthInfo] = useState(() => {
    const user = getUser();
    const isLoading = !user;

    return { isLoading, user };
  })

  useEffect(() => {
    const unsubscribe = addAuthListener(user => {
      setAuthInfo({ isLoading: false, user });
    });

    return unsubscribe;
  }, [])

  return authInfo
}