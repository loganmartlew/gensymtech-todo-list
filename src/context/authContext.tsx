import { useState, useEffect, createContext, FC } from 'react';
import { User } from 'firebase/auth';
import { getAdminName, logIn, logOut, subscribeToUser } from '../util/firebase';
import isUserAdmin from '../util/isUserAdmin';

interface AuthContext {
  user: User | null;
  signIn: () => void;
  signOut: () => void;
  isAdmin: boolean;
  adminName: string;
}

// eslint-disable-next-line
export const AuthContext = createContext({} as AuthContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [adminName, setAdminName] = useState<string>('');

  useEffect(() => {
    const unsub = subscribeToUser(user => {
      setIsAdmin(false);
      if (user) {
        setUser(user);
        isUserAdmin(user).then(isAdmin => {
          setIsAdmin(isAdmin);

          if (isAdmin) {
            getAdminName(user.uid).then(name => setAdminName(name));
          }
        });
      } else {
        setUser(null);
        setIsAdmin(false);
        setAdminName('');
      }
    });

    return unsub;
  }, []);

  const signIn = () => {
    logIn();
  };

  const signOut = () => {
    logOut();
  };

  const value: AuthContext = {
    user,
    signIn,
    signOut,
    isAdmin,
    adminName,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
