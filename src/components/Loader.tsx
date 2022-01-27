import { Card, CircularProgress } from '@material-ui/core';
import { useLoader } from 'providers/LoaderProvider';
import styled from 'styled-components';

const LoaderStyled = styled.div`
  .progress {
    display: grid;
    justify-items: center;
    padding: 24px;
  }
  position: absolute;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
`;

export const Loader = () => {
  const { isLoading, loaderText } = useLoader();
  return (
    <>
      {isLoading && (
        <LoaderStyled>
          <Card className="progress">
            <CircularProgress size={60} />
            <h4>{loaderText}</h4>
          </Card>
        </LoaderStyled>
      )}
    </>
  );
};
