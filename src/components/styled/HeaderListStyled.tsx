import styled from 'styled-components';
import { useTheme } from '../../providers/ThemeContext';

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
  const { theme } = useTheme();
  return (
    <HeaderListStyle theme={theme} className={className}>
      {children}
    </HeaderListStyle>
  );
};

export default HeaderListStyled;
