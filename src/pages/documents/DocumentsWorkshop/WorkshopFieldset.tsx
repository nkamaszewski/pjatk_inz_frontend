import styled from 'styled-components';
import { ApplicationForDTO } from '../../../types/DTO/ApplicationFor';
import WorkshopContent from './WorkshopContent';

const WorkshopFieldsetStyle = styled.div`
  padding: 24px;
  width: 600px;
`;

interface Props {
  closeDrawer: Function;
  fetchApplications: Function;
  editApplicationFor?: ApplicationForDTO | null;
}

const WorkshopFieldset = ({
  closeDrawer,
  fetchApplications,
  editApplicationFor,
}: Props) => {
  return (
    <WorkshopFieldsetStyle>
      <WorkshopContent
        closeDrawer={closeDrawer}
        fetchApplications={fetchApplications}
        editApplicationFor={editApplicationFor}
      />
    </WorkshopFieldsetStyle>
  );
};

export default WorkshopFieldset;
