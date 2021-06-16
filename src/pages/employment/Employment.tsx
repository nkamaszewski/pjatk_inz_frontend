import { useEffect, useState } from 'react';
import { getEmployments } from '../../api/apiRoutes';
import PageHeader from '../../components/PageHeader';
import { EmploymentDTO } from '../../types/DTO/Employment';
import EmploymentList from './EmploymentList';

const Employment = () => {
  const [emps, setEmps]: [EmploymentDTO[], Function] = useState([]);

  const fetchEmployments = () => {
    try {
      getEmployments().then((res) => {
        setEmps(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchEmployments();
  }, []);

  return (
    <div>
      <PageHeader title="Pracownicy" />
      <EmploymentList data={emps} />
    </div>
  );
};

export default Employment;
