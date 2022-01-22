import { Divider, Drawer } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { useDeleteApplicationForReasonMutation } from 'api/applicationForReason/useDeleteApplicationForReasonMutation';
import { useDeleteApplicationForRefundMutation } from 'api/applicationForRefund/useDeleteApplicationForRefundMutation';
import { useState } from 'react';
import styled from 'styled-components';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import { formatDate } from '../../helpers/formatDate';
import { useDictionary } from '../../providers/DictionaryContext';
import { ApplicationForRefundList } from '../../types/DTO/ApplicationForRefund';
import { AddtionalApplicationsFieldset } from './AddtionalApplicationsFieldset';
import { AddtionalApplicationsListHeader } from './AddtionalApplicationsListHeader';

const AddtionalApplicationsListStyle = styled.div`
  padding: 16px;

  .grid-header {
    display: grid;
    grid-template-columns: 1fr 140px 56px;
  }

  .grid-doc {
    display: grid;
    grid-template-columns: 1fr 140px 56px 56px;
    padding: 16px 56px;
  }

  .row {
    padding: 16px;
    margin: 4px 0;
  }
`;

interface Props {
  additionalApplications: ApplicationForRefundList[];
}

export const AddtionalApplicationsList = ({
  additionalApplications,
}: Props) => {
  const [editAdditionalApplication, setAdditionalApplication] =
    useState<ApplicationForRefundList | null>(null);
  const deleteAppForRefundMutation = useDeleteApplicationForRefundMutation();
  const deleteAppForReasonMutation = useDeleteApplicationForReasonMutation();
  const { statuses } = useDictionary();
  const handleCloseDrawer = () => setAdditionalApplication(null);
  const handleDeleteItem = (id: string) => {
    deleteAppForRefundMutation.mutate(id);
  };
  const handleDeleteItemDetails = (id: string) => {
    deleteAppForReasonMutation.mutate(id);
  };

  const getStatusName = (id: string) =>
    statuses.find(({ IdStatus }) => IdStatus === id)?.Name ?? '';

  return (
    <AddtionalApplicationsListStyle>
      <Drawer
        anchor="right"
        open={Boolean(editAdditionalApplication)}
        onClose={handleCloseDrawer}
      >
        <AddtionalApplicationsFieldset closeDrawer={handleCloseDrawer} />
      </Drawer>
      <AddtionalApplicationsListHeader />
      {additionalApplications.map((additionalApp) => (
        <Card key={additionalApp.IdApplicationForRefund} className="row">
          <header className="grid-header">
            <h4>
              {
                additionalApp.applicationForRefundApplicationFor
                  .applicationForEmployee.employeePerson.FirstName
              }{' '}
              {
                additionalApp.applicationForRefundApplicationFor
                  .applicationForEmployee.employeePerson.LastName
              }
            </h4>
            <h4>{formatDate(additionalApp.DateOfSubmission)}</h4>
            <DeleteBtn
              onClick={() =>
                handleDeleteItem(additionalApp.IdApplicationForRefund)
              }
            />
          </header>
          <Divider />
          {additionalApp.applicationForRefundApplicationForReasons.map(
            (application) => (
              <section className="grid-doc">
                <p>{application.applicationForReasonsReasonForRefund.Name}</p>
                <p>{getStatusName(application.IdStatus)}</p>
                <EditBtn
                  onClick={() => setAdditionalApplication(additionalApp)}
                />
                <DeleteBtn
                  onClick={() =>
                    handleDeleteItemDetails(application.IdReasonForRefund)
                  }
                />
              </section>
            )
          )}
        </Card>
      ))}
    </AddtionalApplicationsListStyle>
  );
};
