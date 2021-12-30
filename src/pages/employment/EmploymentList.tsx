import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Drawer, Tooltip } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { SendInvitationBtn } from 'components/SendInvitationBtn/SendInvitationBtn';
import { useLanguage } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import {
  EmploymentDTO,
  EmploymentListDTO,
  mapEmploymentListDTOtoEmploymentDTO,
} from '../../types/DTO/Employment';
import { PersonDTO } from '../../types/DTO/Person';
import EmployeeDetailsFieldset from './EmployeeDetailsFieldset';
import EmploymentFieldset from './EmploymentFieldset';
import EmploymentListHeader from './EmploymentListHeader';
import { useDeleteEmploymentMutation } from './useDeleteEmploymentMutation';

const EmploymentListStyle = styled.div`
  padding: 16px;

  .grid-employment {
    display: grid;
    grid-template-columns: repeat(5, 1fr) repeat(4, 44px);
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  employments: EmploymentListDTO[];
}

const EmploymentList = ({ employments }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [person, setPerson] = useState({} as PersonDTO);
  const [editEmployee, setEditEmployee] = useState<EmploymentDTO | null>(null);
  const deleteMutation = useDeleteEmploymentMutation();

  const deleteEmployee = (id: string) => {
    try {
      deleteMutation.mutate({ id });
    } catch (e) {
      console.error(e);
    }
  };

  const handleCloseDrawer = () => setEditEmployee(null);
  const {
    language: { schema },
  } = useLanguage();

  return (
    <EmploymentListStyle>
      <EmploymentListHeader />
      {employments.map((employment) => {
        return (
          <Card key={employment.IdEmployment} className="grid-employment row">
            <p>{employment.FirstName}</p>
            <p>{employment.LastName}</p>
            <p>{employment.Division.Name}</p>
            <p>{employment.Department.Name}</p>
            <p>{employment.Position.Name}</p>
            {person.personEmployee?.IsActive ? (
              <span />
            ) : (
              <SendInvitationBtn email={person.Email} />
            )}
            <EditBtn
              onClick={() =>
                setEditEmployee(mapEmploymentListDTOtoEmploymentDTO(employment))
              }
            />
            <DeleteBtn
              onClick={() => deleteEmployee(employment.IdEmployment)}
            />
            <Tooltip title={schema.group}>
              <Button
                onClick={() => {
                  setPerson(person);
                  setIsOpen(true);
                }}
              >
                <FontAwesomeIcon className="g-primary-color" icon={faSitemap} />
              </Button>
            </Tooltip>
          </Card>
        );
      })}
      <Drawer
        anchor="right"
        open={Boolean(editEmployee)}
        onClose={handleCloseDrawer}
      >
        <EmploymentFieldset
          closeDrawer={handleCloseDrawer}
          editEmployee={editEmployee}
        />
      </Drawer>
      <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
        <EmployeeDetailsFieldset
          closeDrawer={() => setIsOpen(false)}
          person={person}
        />
      </Drawer>
    </EmploymentListStyle>
  );
};

export default EmploymentList;
