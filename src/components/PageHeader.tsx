import styled from 'styled-components';

const PageHeaderStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  background-color: #b9cacd;
  width: 100%;
  height: 120px;

  h1 {
    padding-left: 36px;
  }
`;

interface Props {
  title: string;
}

const PageHeader = ({ title }: Props) => {
  return (
    <PageHeaderStyle>
      <h1>{title}</h1>
    </PageHeaderStyle>
  );
};

export default PageHeader;
