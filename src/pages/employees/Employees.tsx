import PageHeader from '../../components/PageHeader';
import PageLayout from '../../components/PageLayout';
import EmployeesList from './EmployeesList';

const Employees = () => {
  return (
    <div>
      <PageHeader title="Pracownicy" />
      <PageLayout>
        <div>
          <EmployeesList data={[]} />
        </div>
      </PageLayout>
    </div>
  );
};

export default Employees;
