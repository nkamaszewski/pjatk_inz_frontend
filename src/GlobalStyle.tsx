import styled from 'styled-components';

export const GlobalStyle = styled.div`
  .toolbar--global {
    padding: 36px;
    width: calc(100% - 72px);
    display: flex;
    flex-direction: row-reverse;
  }

  .g-primary-color {
    color: ${(p) => p.theme.primaryBackground};
  }

  .g-error-color {
    color: ${(p) => p.theme.error};
  }

  .secondary--background {
    background-color: #f0504a;
  }

  .success--background {
    background-color: #0d924f;
  }
  .success--color {
    color: #0d924f;
  }
`;
