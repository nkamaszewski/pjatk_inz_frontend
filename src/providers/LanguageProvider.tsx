import { createContext, ReactNode, useContext, useReducer } from 'react';
import { en } from '../languages/en';
import { LanguageSchema } from '../languages/LanguageSchema';
import { pl } from '../languages/pl';

type LanguageType = 'pl' | 'en';

interface LanguageState {
  country: LanguageType;
  schema: LanguageSchema;
}

interface LanguageAction {
  type: LanguageType;
}

export interface IuseLanguage {
  language: LanguageState;
  setPlLanguage: () => void;
  setEnLanguage: () => void;
}

function reducer(state: LanguageState, action: LanguageAction): LanguageState {
  switch (action.type) {
    case 'pl':
      return { country: 'pl', schema: pl };
    case 'en':
      return { country: 'en', schema: en };
    default:
      throw new Error('language schema is not available!');
  }
}

const initialState: LanguageState = { country: 'pl', schema: pl };

const useCreateLanguage = (): IuseLanguage => {
  const [language, dispatch] = useReducer(reducer, initialState);

  const setPlLanguage = (): void => dispatch({ type: 'pl' });
  const setEnLanguage = (): void => dispatch({ type: 'en' });

  return { language, setPlLanguage, setEnLanguage };
};

export const LanguageContext = createContext<IuseLanguage | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const language = useCreateLanguage();
  return (
    <LanguageContext.Provider value={language}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const languageCtx = useContext(LanguageContext);

  if (!languageCtx) {
    throw new Error('useLanguage is beyond LanguageContext');
  }

  return languageCtx;
};
