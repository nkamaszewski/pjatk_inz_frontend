import { Snackbar, SnackbarContent } from '@material-ui/core';
import { useContext } from 'react';
import styled from 'styled-components';
import { NotificationContext } from '../contexts/NotificationContext';

const SnackbarMessageStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const SnackbarNotification = () => {
  const notificationCtx = useContext(NotificationContext);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={notificationCtx.snackbar.open}
    >
      <SnackbarContent
        message={
          <SnackbarMessageStyle>
            <p>{notificationCtx.snackbar.message}</p>
          </SnackbarMessageStyle>
        }
      />
    </Snackbar>
  );
};

export default SnackbarNotification;
