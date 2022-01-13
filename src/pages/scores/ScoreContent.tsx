import { Button } from '@material-ui/core';
import { useIssuesQuery } from 'api/issue/useIssuesQuery';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';

const ScoreContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

const initialValues = {
  Name: '',
};
interface Props {
  closeDrawer: () => void;
}

export const ScoreContent = ({ closeDrawer }: Props) => {
  const schema = useLanguageSchema();

  return (
    <ScoreContentStyle>
      <Button variant="contained" color="primary" onClick={() => {}}>
        {schema.save}
      </Button>
    </ScoreContentStyle>
  );
};
