import { Button, Divider, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getOwner, updateCompany } from '../../api/Company';
import SwitchBtn from '../../components/controls_UI/SwitchBtn';
import PageHeader from '../../components/PageHeader';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../contexts/NotificationContext';
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
      setSnackbar(createSnackbarError('Nie udało się dokonać zmian!'));
    } finally {
      setOwnerEditModel(null);
    }
  };

  return (
    <CompanyDateStyle>
      <PageHeader title="Firma dane" />
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
              label="Nazwa"
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
              label="NIP"
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
              label="Ulica"
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
              label="Numer"
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
              label="Kod pocztowy"
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
              label="Miasto"
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
              Zapisz
            </Button>
          </section>
        )}

        <SwitchBtn
          value={Boolean(ownerEditModel)}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setOwnerEditModel(event.target.checked ? owner : null)
          }
          label="Tryb edycji"
        />
      </div>
    </CompanyDateStyle>
  );
};

export default CompanyData;
