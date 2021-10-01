import styled from 'styled-components';
import { useLanguage } from '../providers/LanguageProvider';
import { useTheme } from '../providers/ThemeContext';

const LanguagePanelStyled = styled.div`
  height: 20px;
  width: 80px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 8px;
  .lang:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.primaryHover};
  }

  .active {
    color: ${({ theme }) => theme.primaryHover};
  }
`;

export const LanguagePanel = () => {
  const { theme } = useTheme();
  const {
    language: { country },
    setEnLanguage,
    setPlLanguage,
  } = useLanguage();
  return (
    <LanguagePanelStyled theme={theme}>
      <p
        className={`lang ${country === 'pl' ? 'active' : ''}`}
        onClick={setPlLanguage}
      >
        pl
      </p>
      <p>|</p>
      <p
        className={`lang ${country === 'en' ? 'active' : ''}`}
        onClick={setEnLanguage}
      >
        en
      </p>
    </LanguagePanelStyled>
  );
};
