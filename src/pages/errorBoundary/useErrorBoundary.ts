import { useLanguage } from 'providers/LanguageProvider';
import { useHistory } from 'react-router';
import { PATH } from 'routes/paths';

export const useErrorBoundary = () => {
  const {
    language: {
      schema: { errorBoundary },
    },
  } = useLanguage();
  const history = useHistory();

  const returnToApp = () => {
    history.push(PATH.employment);
    window.location.reload();
  };

  return {
    text: errorBoundary,
    returnToApp,
  };
};
