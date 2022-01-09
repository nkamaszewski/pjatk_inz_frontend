import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fab } from '@material-ui/core';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useDrawer } from 'hooks/useDrawer';
import { useLanguageSchema } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { ParticipationForm } from './ParticipationForm';

const ParticipationFieldsetHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

interface Props {
  IdEducation: string;
}

export const ParticipationFieldsetHeader = ({ IdEducation }: Props) => {
  const { open, openDrawer, closeDrawer } = useDrawer();

  const schema = useLanguageSchema();
  return (
    <ParticipationFieldsetHeaderStyled>
      {open && (
        <ParticipationForm
          open={open}
          close={closeDrawer}
          IdEducation={IdEducation}
        />
      )}
      <h3>{capFL(schema.participants)}</h3>
      <Fab color="primary" aria-label="add" onClick={openDrawer}>
        <FontAwesomeIcon icon={faPlus} />
      </Fab>
    </ParticipationFieldsetHeaderStyled>
  );
};
