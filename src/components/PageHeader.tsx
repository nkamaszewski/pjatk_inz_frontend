import styled from 'styled-components';
import Logo from '../assets/logo.svg';

const PageHeaderStyle = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  align-items: center;
  background-color: #b9cacd;
  width: 100%;
  height: 120px;

  img,
  h1 {
    padding-left: 36px;
  }
`;

interface Props {
  title: string;
}

const PageHeader = ({ title }: Props) => {
  return (
    <PageHeaderStyle>
      <img src={Logo} alt="logo" />
      <h1>{title}</h1>
    </PageHeaderStyle>
  );
};

export default PageHeader;
