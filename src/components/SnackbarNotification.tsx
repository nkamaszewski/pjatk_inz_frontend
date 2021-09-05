import { Snackbar, SnackbarContent } from '@material-ui/core';
import styled from 'styled-components';
import { SnackbarVariant, useSnackbar } from '../contexts/NotificationContext';

const SnackbarMessageStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const SnackbarNotification = () => {
  const { snackbar } = useSnackbar();

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
        vertical: 'top',
        horizontal: 'center',
      }}
      open={snackbar.open}
    >
      <SnackbarContent
        className={getSnackbarClass(snackbar.variant)}
        message={
          <SnackbarMessageStyle>
            <p>{snackbar.message}</p>
          </SnackbarMessageStyle>
        }
      />
    </Snackbar>
  );
};

export default SnackbarNotification;
