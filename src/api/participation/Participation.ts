import { axiosJWT } from 'helpers/tokenAxios';
import {
  ParticipationDTO,
  ParticipationsListDTO,
  ParticipationsWithoutQuestionnaireDTO,
} from 'types/DTO/Participation';

export const getParticipations = () => axiosJWT.get('/participations/');
export const getParticipationsByIdEducation = (idEducation: string) =>
  axiosJWT.get<ParticipationsListDTO[]>(
    `/participations/${idEducation}/education`
  );

export const getPaticipateCeritification = (id: string) =>
  axiosJWT.get(`participations/${id}/certificate`, {
    responseType: 'blob',
  });

export const getParticipationsWithoutQuestionnaires = () =>
  axiosJWT.get<ParticipationsWithoutQuestionnaireDTO[]>(
    '/participations/withoutquest/'
  );

export const postParticipation = (
  participation: Omit<ParticipationDTO, 'IdParticipation'>
) => {
  const formData = new FormData();

  formData.append(
    'CertificateOfCompletion',
    participation.CertificateOfCompletion
  );
  formData.append('IdEducation', participation.IdEducation);
  formData.append('IdPerson', participation.IdPerson);
  formData.append('DateOfRegistration', participation.DateOfRegistration);
  formData.append('EndDate', participation.EndDate);

  return axiosJWT.post<ParticipationDTO>('/participations/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const updateParticipation = (participation: ParticipationDTO) => {
  const formData = new FormData();

  formData.append(
    'CertificateOfCompletion',
    participation.CertificateOfCompletion
  );
  formData.append('IdParticipation', participation.IdParticipation);
  formData.append('IdEducation', participation.IdEducation);
  formData.append('IdPerson', participation.IdPerson);
  formData.append('DateOfRegistration', participation.DateOfRegistration);
  formData.append('EndDate', participation.EndDate);
  return axiosJWT.put<ParticipationDTO>(
    `/participations/${participation.IdParticipation}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );
};

export const deleteParticipation = ({ id }: { id: string }) =>
  axiosJWT.delete(`/participations/${id}`);
