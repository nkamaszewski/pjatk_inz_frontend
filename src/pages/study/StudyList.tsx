import { Drawer } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { AddParticipation } from 'components/AddParticipation';
import { ParticipationFieldset } from 'components/participation/ParticipationFieldset';
import { useDrawer } from 'hooks/useDrawer';
import { useState } from 'react';
import styled from 'styled-components';
import { deleteStudy } from '../../api/Study';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { StudiesListDTO } from '../../types/DTO/Study';
import StudyFieldset from './StudyFieldset';
import StudyListHeader from './StudyListHeader';

const StudyListStyle = styled.div`
  padding: 16px;

  .grid-coach {
    display: grid;
    grid-template-columns: 120px 1fr 120px 80px 100px repeat(3, 56px);
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  studies: StudiesListDTO[];
  fetchStudies: () => void;
}

const StudyList = ({ studies, fetchStudies }: Props) => {
  const [editStudy, setEditStudy]: [StudiesListDTO | null, Function] =
    useState(null);
  const { open, openDrawer, closeDrawer } = useDrawer();
  const { setSnackbar } = useSnackbar();
  const handleCloseDrawer = () => setEditStudy(null);
  const handleDeleteItem = async (id: string) => {
    try {
      await deleteStudy(id);
      fetchStudies();
      setSnackbar(createSnackbarSuccess('usunięto studia'));
    } catch (e) {
      setSnackbar(createSnackbarError('nie udało się usunąć studiów!'));
    }
  };
  return (
    <StudyListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editStudy)}
        onClose={handleCloseDrawer}
      >
        <StudyFieldset
          closeDrawer={handleCloseDrawer}
          fetchStudies={fetchStudies}
          editStudy={editStudy}
        />
      </Drawer>
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <ParticipationFieldset />
      </Drawer>
      <StudyListHeader />
      {studies.map((study) => {
        return (
          <Card key={study.IdEducation} className="grid-coach row">
            <p>{study.FieldOfStudy}</p>
            <p>{study.studyUniversity.Name}</p>
            <p>{study.studyUniversity.City}</p>
            <p>{study.studysStudyMode.Name}</p>
            <p>{study.studysGraduateDegree.Name}</p>

            <EditBtn onClick={() => setEditStudy(study)} />
            <DeleteBtn onClick={() => handleDeleteItem(study.IdEducation)} />
            <AddParticipation onClick={openDrawer} />
          </Card>
        );
      })}
    </StudyListStyle>
  );
};

export default StudyList;
