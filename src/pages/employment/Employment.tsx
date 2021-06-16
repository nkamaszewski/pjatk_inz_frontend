import { useEffect, useState } from 'react';
import { getEmployments } from '../../api/apiRoutes';
import PageHeader from '../../components/PageHeader';
import EmployeesList from './EmploymentList';

const Employment = () => {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    try {
      getEmployments().then((res) => {
        setEmp(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div>
      <PageHeader title="Pracownicy" />
      <EmployeesList data={emp} />
    </div>
  );
};

export default Employment;
