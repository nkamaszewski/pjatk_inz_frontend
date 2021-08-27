import { CoachDTO } from './Coach';
import { CompanyDTO } from './Company';
import { EducationDTO } from './Education';
import { TopicDTO } from './Topic';

export interface TrainingDTO {
  Internal: boolean;
  DateFrom: Date;
  DateTo: Date;
  trainingTopic: TopicDTO;
  trainingCompany: CompanyDTO;
  trainingEducation: EducationDTO;
  trainingCoach: CoachDTO;
}
