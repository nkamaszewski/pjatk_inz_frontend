export interface GroupListDTO {
  IdGroup: string;
  Name: string;
  NumberOfPerson: number;
  IdEducation: string;
  Subject: string;
  Topic: string;
}

export interface GroupDTO {
  IdGroup: string;
  Name: string;
  NumberOfPerson: number;
  IdEducation: string;
}

export const mapGroupListDTOtoGroupDTO = ({
  IdGroup,
  Name,
  NumberOfPerson,
  IdEducation,
}: GroupListDTO): GroupDTO => ({ IdGroup, Name, NumberOfPerson, IdEducation });
