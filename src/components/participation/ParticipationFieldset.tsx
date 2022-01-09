import { useParticipationsQuery } from 'api/participation/useParticipationsQuery';
import styled from 'styled-components';
import { ParticipationFieldsetHeader } from './ParticipationFieldsetHeader';
import { ParticipationsList } from './ParticipationsList';

const ParticipationFieldsetStyled = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  IdEducation: string;
}

export const ParticipationFieldset = ({ IdEducation }: Props) => {
  const participationQuery = useParticipationsQuery(IdEducation);
  return (
    <ParticipationFieldsetStyled>
      <ParticipationFieldsetHeader IdEducation={IdEducation} />
      {participationQuery.data?.data.length ? (
        <ParticipationsList participations={participationQuery.data?.data} />
      ) : null}
    </ParticipationFieldsetStyled>
  );
};
