import { CircularProgress } from '@material-ui/core';
import { useLoader } from 'providers/LoaderProvider';
import styled from 'styled-components';

const LoaderStyled = styled.div`
  .progress {
    position: absolute;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
  }
`;

export const Loader = () => {
  const { isLoading } = useLoader();
  return (
    <>
      {isLoading && (
        <LoaderStyled>
          <CircularProgress size={60} className="progress" />
        </LoaderStyled>
      )}
    </>
  );
};
