import { Snackbar, SnackbarContent } from '@material-ui/core';
import { useContext } from 'react';
import styled from 'styled-components';
import {
  NotificationContext,
  SnackbarVariant,
} from '../contexts/NotificationContext';

const SnackbarMessageStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const SnackbarNotification = () => {
  const notificationCtx = useContext(NotificationContext);

  const getSnackbarClass = (variant: SnackbarVariant): string => {
    switch (variant) {
      case SnackbarVariant.success:
        return 'success--background';
      case SnackbarVariant.error:
        return 'secondary--background';
      default:
        return 'success--background';
    }
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={notificationCtx.snackbar.open}
    >
      <SnackbarContent
        className={getSnackbarClass(notificationCtx.snackbar.variant)}
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
