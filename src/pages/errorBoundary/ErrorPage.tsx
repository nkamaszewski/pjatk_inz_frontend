import styled from 'styled-components';
import lottieJson from 'animations/Error.json';
import Lottie from 'react-lottie-player';
import { Button } from '@material-ui/core';
import { useErrorBoundary } from './useErrorBoundary';

const ErrorPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .lottie {
    width: 800px;
    height: 600px;
  }
  .return-btn {
    width: 220px;
    margin-top: 16px;
  }
`;

export const ErrorPage = () => {
  const { text, returnToApp } = useErrorBoundary();
  return (
    <ErrorPageStyled>
      <Lottie className="lottie" loop animationData={lottieJson} play />
      <h3>{text.message}</h3>
      <Button
        className="return-btn"
        color="secondary"
        variant="contained"
        onClick={returnToApp}
      >
        {text.button}
      </Button>
    </ErrorPageStyled>
  );
};
