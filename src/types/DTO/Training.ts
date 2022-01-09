import { CoachDTO } from './Coach';
import { CompanyDTO } from './Company';
import { EducationDTO } from './Education';
import { TopicDTO } from './Topic';

export interface TrainingDTO {
  Internal: boolean;
  DateFrom: string;
  DateTo: string;
  trainingTopic: TopicDTO;
  trainingCompany: CompanyDTO;
  trainingEducation: EducationDTO;
  trainingCoach: CoachDTO;
}

export interface TrainingDTOModel {
  IdEducation: string;
  IdTopic: string;
  IdCompany: string;
  IdPerson: string;
  Internal: boolean;
  DateFrom: string;
  DateTo: string;
  Price: number;
  PriceAccommodation: number;
  PriceTransit: number;
}

export const mapTrainingDTOToEditModel = (
  t: TrainingDTO
): TrainingDTOModel => ({
  IdEducation: t.trainingEducation.IdEducation,
  IdTopic: t.trainingTopic.IdTopic,
  IdCompany: t.trainingCompany.IdCompany,
  IdPerson: t.trainingCoach.IdPerson,
  Internal: t.Internal,
  DateFrom: t.DateFrom,
  DateTo: t.DateTo,
  Price: t.trainingEducation.Price,
  PriceAccommodation: t.trainingEducation.PriceAccommodation,
  PriceTransit: t.trainingEducation.PriceTransit,
});
