import { createContext, useContext, useEffect, useState } from 'react';
import { postLogin } from '../api/Login';

interface IUser {
  id: string;
  token: string;
}

const useAuthState = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({ id: '', token: '' });

  useEffect(() => {
    const authStoraged = Boolean(localStorage.getItem('auth'));
    setAuth(authStoraged);

    const userStoraged = localStorage.getItem('user');
    if (userStoraged) {
      setUser(JSON.parse(userStoraged));
    }
  }, []);

  const logIn = async (email: string, password: string): Promise<boolean> => {
    localStorage.clear();
    try {
      const response = await postLogin({ email, password });
      if (response.data.auth) {
        localStorage.setItem('auth', 'true');
        localStorage.setItem('user', JSON.stringify(response.data.user));
        setAuth(true);
        setUser(response.data.user);
      }
      return response.data.auth;
    } catch (e) {
      console.error('logIn', e);
    }
    return false;
  };

  return { auth, user, logIn };
};

interface IAuthContext {
  auth: boolean;
  user: { id: string; token: string };
  logIn: (email: string, password: string) => Promise<boolean>;
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
