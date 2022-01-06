import { checkIfEmployeeExist } from 'helpers/checkIfEmployeeExist';
import { useEffect } from 'react';

export const useShowEmployeeConfig = (formik: any) => {
  const check = async (id: string) => {
    const isExist = await checkIfEmployeeExist(id);
    if (isExist !== formik.values.showEmployeeConfig) {
      formik.setFieldValue('showEmployeeConfig', isExist);
    }
  };

  useEffect(() => {
    check(formik.values.IdPerson);
    // eslint-disable-next-line
  }, [formik.values.IdPerson]);
};
