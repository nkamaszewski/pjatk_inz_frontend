import styled from 'styled-components';
import { NotificationContext } from '../contexts/NotificationContext';
import useNotification from '../hooks/useNotification';
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
  const notification = useNotification();

  return (
    <NotificationContext.Provider value={notification}>
      <SnackbarNotification />
      <PageLayoutStyle>
        <nav>
          <Navigation />
        </nav>
        <div>{children}</div>
      </PageLayoutStyle>
    </NotificationContext.Provider>
  );
};

export default PageLayout;
