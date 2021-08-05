import { GraduateDegreeDTO } from './GraduateDegree';
import { StudyModeDTO } from './StudyMode';
import { UniversitetDTO } from './Universitet';

export interface StudyDTO {
  IdEducation: string;
  FieldOfStudy: string;
  IdUniversity: string;
  IdStudyMode: string;
  IdGraduateDegree: string;
}

export interface StudiesListDTO {
  IdEducation: string;
  FieldOfStudy: string;
  IdUniversity: string;
  IdStudyMode: string;
  IdGraduateDegree: string;
  studyUniversity: UniversitetDTO;
  studysStudyMode: StudyModeDTO;
  studysGraduateDegree: GraduateDegreeDTO;
}
