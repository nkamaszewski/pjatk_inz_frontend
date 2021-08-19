import styled from 'styled-components';

import Navigation from './Navigation';
import SnackbarNotification from './SnackbarNotification';

const PageLayoutStyle = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 280px 1fr;
`;

interface Props {
  children: JSX.Element;
}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <SnackbarNotification />
      <PageLayoutStyle>
        <nav>
          <Navigation />
        </nav>
        <div>{children}</div>
      </PageLayoutStyle>
    </>
  );
};

export default PageLayout;
