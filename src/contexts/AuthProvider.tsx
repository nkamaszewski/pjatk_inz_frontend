import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { postLogin } from '../api/Login';
import { postRegister } from '../api/Register';
import { PersonDTO } from '../types/DTO/Person';
import { useLanguage } from './LanguageProvider';
import { useSnackbar } from './NotificationContext';

interface IUser {
  user: PersonDTO | null;
  token: string;
}

export interface IRegisterUser {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  pesel: string;
  password: string;
}

const DEFAULT_USER = { user: null, token: '' };

const setDefaultAuth = () => {
  localStorage.setItem('auth', JSON.stringify(DEFAULT_USER));
};

const useAuthState = () => {
  const [auth, setAuth] = useState<IUser>(
    localStorage.getItem('auth')
      ? JSON.parse(localStorage.getItem('auth') as string)
      : DEFAULT_USER
  );

  const history = useHistory();
  const { setErrorSnackbar } = useSnackbar();
  const {
    language: {
      schema: {
        auth: { _loginError, _registerError },
      },
    },
  } = useLanguage();

  const logIn = async (email: string, password: string): Promise<boolean> => {
    localStorage.clear();
    try {
      const response = await postLogin({ email, password });
      if (response.data.user) {
        localStorage.setItem('auth', JSON.stringify(response.data.user));
        setAuth(response.data);
        return true;
      } else {
        setDefaultAuth();
      }
    } catch (e) {
      setErrorSnackbar(_loginError);
      console.error('logIn', e);
    }
    return false;
  };

  const logOut = () => {
    setAuth(DEFAULT_USER);
    setDefaultAuth();
    history.push('/logowanie');
  };

  const register = async (user: IRegisterUser): Promise<boolean> => {
    try {
      const response = await postRegister(user);
      if (response.data.user) {
        localStorage.setItem('auth', JSON.stringify(response.data.user));
        setAuth(response.data);
        return true;
      } else {
        setDefaultAuth();
      }
    } catch (e) {
      setErrorSnackbar(_registerError);
      console.error(register, e);
    }
    return false;
  };

  return { auth, logIn, logOut, register };
};

interface IAuthContext {
  auth: IUser;
  logIn: (email: string, password: string) => Promise<boolean>;
  logOut: () => void;
  register: (user: IRegisterUser) => Promise<boolean>;
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
