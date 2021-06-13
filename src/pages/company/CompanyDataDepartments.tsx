import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getDepartments } from '../../api/apiRoutes';
import PageHeader from '../../components/PageHeader';

const CompanyDataDepartmentsStyle = styled.div`
  .list {
    padding: 24px;

    p {
      margin: 8px 0;
    }
  }
`;

const CompanyDataDepartments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    try {
      getDepartments().then((res) => {
        setDepartments(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <CompanyDataDepartmentsStyle>
      <PageHeader title="Firma piony wydziały" />
      <section className="list">
        {departments.map((department: any, index: number) => (
          <p key={department.IdDivision}>
            {`${index + 1}. ${department.Name}`}
          </p>
        ))}
      </section>
    </CompanyDataDepartmentsStyle>
  );
};

export default CompanyDataDepartments;
