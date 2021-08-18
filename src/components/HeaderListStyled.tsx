import { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext';

const HeaderListStyle = styled.div`
  background-color: ${(p) => p.theme.listHeaderBackground};
  font-size: 20px;
  font-weight: bold;
  padding: 16px;
`;

interface Props {
  children: JSX.Element;
  className: string | undefined;
}

const HeaderListStyled = ({ children, className }: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <HeaderListStyle theme={theme} className={className}>
      {children}
    </HeaderListStyle>
  );
};

export default HeaderListStyled;
