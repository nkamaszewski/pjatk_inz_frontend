import { checkIfEmployeeExist } from 'helpers/checkIfEmployeeExist';
import { useEffect, useState } from 'react';

export const useShowEmployeeConfig = (IdPerson: string) => {
  const [showEmployeeConfig, setShowEmployeeConfig] = useState(false);

  const check = async (id: string) => {
    const isExist = await checkIfEmployeeExist(id);
    setShowEmployeeConfig(isExist);
  };

  useEffect(() => {
    check(IdPerson);
  }, [IdPerson]);

  return showEmployeeConfig;
};
