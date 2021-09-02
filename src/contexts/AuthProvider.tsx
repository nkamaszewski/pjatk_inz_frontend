import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { postLogin } from '../api/Login';

interface IUser {
  id: string;
  token: string;
}

const DEFAULT_USER = { id: '', token: '' };

const setDefaultAuth = () => {
  localStorage.setItem('auth', '');
  localStorage.setItem('user', JSON.stringify(DEFAULT_USER));
};

const useAuthState = () => {
  const [auth, setAuth] = useState<boolean>(
    Boolean(localStorage.getItem('auth'))
  );
  const [user, setUser] = useState<IUser>(
    localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user') as string)
      : DEFAULT_USER
  );
  const history = useHistory();

  const logIn = async (email: string, password: string): Promise<boolean> => {
    localStorage.clear();
    try {
      const response = await postLogin({ email, password });
      if (response.data.auth) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setAuth(true);
        setUser(response.data.user);
      } else {
        setDefaultAuth();
      }
      return response.data.auth;
    } catch (e) {
      console.error('logIn', e);
    }
    return false;
  };

  const logOut = () => {
    setAuth(false);
    setUser(DEFAULT_USER);
    setDefaultAuth();
    history.push('/logowanie');
  };

  return { auth, user, logIn, logOut };
};

interface IAuthContext {
  auth: boolean;
  user: { id: string; token: string };
  logIn: (email: string, password: string) => Promise<boolean>;
  logOut: () => void;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const auth = useAuthState();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const authCtx = useContext(AuthContext);

  if (!authCtx) {
    throw new Error('useAuth is beyond NotificationContext');
  }

  return authCtx;
};
