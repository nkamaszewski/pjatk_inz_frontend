import { getEmployee } from 'api/Employee';

export const checkIfEmployeeExist = async (IdPerson: string) => {
  if (IdPerson) {
    try {
      const res = await getEmployee(IdPerson);
      if (res.status === 404) {
        return false;
      } else {
        return true;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
};
