import { CompanyDTO } from './Company';
import { TopicDTO } from './Topic';

export interface TrainingDTO {
  IdEducation: string;
  IdTopic: string;
  IdCompany: string;
  IdPerson: string;
  Internal: boolean;
  DateFrom: Date;
  trainingTopic: TopicDTO;
  trainingCompany: CompanyDTO;
}
