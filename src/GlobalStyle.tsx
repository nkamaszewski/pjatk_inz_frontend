import styled from 'styled-components';

export const GlobalStyle = styled.div`
  .toolbar--global {
    padding: 36px;
    width: calc(100% - 72px);
    display: flex;
    flex-direction: row-reverse;
  }

  .primary--color {
    color: #3f51b5;
  }

  .secondary--background {
    background-color: #f0504a;
  }
  .secondary--color {
    color: #f0504a;
  }
  .success--background {
    background-color: #0d924f;
  }
  .success--color {
    color: #0d924f;
  }

  .default--icon-color {
    color: rgba(0, 0, 0, 0.26);
  }
`;
