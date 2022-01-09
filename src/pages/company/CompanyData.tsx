import { Button, Divider, TextField } from '@material-ui/core';
import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getOwner, updateCompany } from '../../api/company/Company';
import SwitchBtn from '../../components/controls_UI/SwitchBtn';
import PageHeader from '../../components/PageHeader';
import {
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { CompanyDTO } from '../../types/DTO/Company';

const CompanyDateStyle = styled.div`
  .company-section {
    display: grid;
    grid-template-columns: 360px auto;
    grid-column-gap: 16px;
    align-items: start;
    padding: 36px;
  }

  .company-data {
    p {
      padding: 8px;
    }
  }

  .Name {
    grid-area: Name;
  }
  .City {
    grid-area: City;
  }
  .PostalCode {
    grid-area: PostalCode;
  }
  .Street {
    grid-area: Street;
  }
  .Number {
    grid-area: Number;
  }
  .TIN {
    grid-area: TIN;
  }
  .save-btn {
    grid-area: save-btn;
  }

  .form-section {
    width: 360px;
    display: grid;
    grid-gap: 16px;
    grid-template-areas:
      'Name Name'
      'TIN TIN'
      'Street Number'
      'PostalCode City'
      '. save-btn';
  }
`;

const CompanyData = () => {
  const [owner, setOwner] = useState<CompanyDTO | undefined>(undefined);
  const [ownerEditModel, setOwnerEditModel] = useState<
    CompanyDTO | undefined | null
  >(null);
  const { setSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();

  const fetchOwner = () => {
    try {
      getOwner().then((res) => {
        setOwner(res.data[0]);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchOwner();
  }, []);

  const handleOwnerEditChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setOwnerEditModel(
      (prev) =>
        ({ ...prev, [event.target.name]: event.target.value } as CompanyDTO)
    );

  const handleOnSave = async () => {
    try {
      if (ownerEditModel) {
        await updateCompany(ownerEditModel);
        setOwner(ownerEditModel);
      }
      setSnackbar(createSnackbarSuccess('Zmiany zostały dokonane'));
    } catch (e) {
      console.error(e);
      handleHttpError(e);
    } finally {
      setOwnerEditModel(null);
    }
  };

  const schema = useLanguageSchema();

  return (
    <CompanyDateStyle>
      <PageHeader title={schema.companyData} />
      <div className="company-section">
        {owner && !ownerEditModel && (
          <section className="company-data">
            <h3>{owner.Name}</h3>
            <Divider />
            <p>NIP: {owner.TIN}</p>
            <h4>Adres:</h4>
            <p>
              {owner.Street} {owner.Number}
            </p>
            <p>
              {owner.PostalCode} {owner.City}
            </p>
          </section>
        )}

        {ownerEditModel && (
          <section className="form-section">
            <TextField
              label={schema.name}
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={ownerEditModel.Name}
              name="Name"
              className="Name"
              onChange={handleOwnerEditChange}
            />
            <Divider />
            <TextField
              label={schema.taxId}
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={ownerEditModel.TIN}
              name="TIN"
              className="TIN"
              onChange={handleOwnerEditChange}
            />
            <TextField
              label={schema.street}
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={ownerEditModel.Street}
              name="Street"
              className="Street"
              onChange={handleOwnerEditChange}
            />
            <TextField
              label={schema.number}
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={ownerEditModel.Number}
              name="Number"
              className="Number"
              onChange={handleOwnerEditChange}
            />
            <TextField
              label={schema.postcode}
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={ownerEditModel.PostalCode}
              name="PostalCode"
              className="PostalCode"
              onChange={handleOwnerEditChange}
            />
            <TextField
              label={schema.city}
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={ownerEditModel.City}
              name="City"
              className="City"
              onChange={handleOwnerEditChange}
            />
            <Button
              onClick={handleOnSave}
              color="primary"
              variant="contained"
              className="save-btn"
            >
              {schema.save}
            </Button>
          </section>
        )}

        <SwitchBtn
          value={Boolean(ownerEditModel)}
          onChange={(checked) => setOwnerEditModel(checked ? owner : null)}
          label={schema.editMode}
        />
      </div>
    </CompanyDateStyle>
  );
};

export default CompanyData;
