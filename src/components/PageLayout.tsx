import styled from 'styled-components';
import Navigation from './Navigation';

const PageLayoutStyle = styled.div`
  height: calc(100vh - 120px - 24px);
  display: grid;
  grid-template-columns: 280px 1fr;
  padding: 12px 0;
`;

interface Props {
  children: JSX.Element;
}

const PageLayout = ({ children }: Props) => {
  return (
    <PageLayoutStyle>
      <nav>
        <Navigation />
      </nav>
      <div>{children}</div>
    </PageLayoutStyle>
  );
};

export default PageLayout;
