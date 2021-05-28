import PageHeader from '../../components/PageHeader';
import EmployeesList from './EmployeesList';

const Employees = () => {
  return (
    <div>
      <PageHeader title="Pracownicy" />
      <EmployeesList data={[]} />
    </div>
  );
};

export default Employees;
