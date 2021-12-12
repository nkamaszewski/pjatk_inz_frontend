import HeaderFieldset from 'components/HeaderFieldset';
import FieldsetStyled from 'components/styled/FieldsetStyled';
import styled from 'styled-components';
import { ParticipationContent } from './ParticipationContent';

const ParticipationFieldsetStyled = styled.div``;

interface ParticipationFieldsetProps {
  closeDrawer: () => void;
}

export const ParticipationFieldset = ({
  closeDrawer,
}: ParticipationFieldsetProps) => {
  return (
    <FieldsetStyled>
      <HeaderFieldset title={`Uczestnicy`} closeDrawer={closeDrawer} />
      <ParticipationContent />
    </FieldsetStyled>
  );
};
