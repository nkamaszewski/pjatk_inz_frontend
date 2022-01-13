import { axiosJWT } from 'helpers/tokenAxios';
import { IssueDTO } from 'types/DTO/Issue';

export const getIssues = () => axiosJWT.get<IssueDTO[]>('/issues/');
