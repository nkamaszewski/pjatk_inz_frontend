import { Button, TextField } from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { postCompany, updateCompany } from '../../api/Company';
import {
  createSnackbarError,
  createSnackbarSuccess,
  useSnackbar,
} from '../../providers/NotificationContext';
import { CompanyDTO } from '../../types/DTO/Company';
import { useHandleHttpError } from 'hooks/useHandleHttpError';

const CompanyContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: Function;
  fetchCompanies: () => void;
  editCompany?: CompanyDTO | null;
}

const CompanyContent = ({
  closeDrawer,
  fetchCompanies,
  editCompany,
}: Props) => {
  const [name, setName] = useState(editCompany?.Name ?? '');
  const [tin, setTin] = useState(editCompany?.TIN ?? '');
  const [street, setStreet] = useState(editCompany?.Street ?? '');
  const [streetNumber, setStreetNumber] = useState(editCompany?.Number ?? '');
  const [postalCode, setPostalCode] = useState(editCompany?.PostalCode ?? '');
  const [city, setCity] = useState(editCompany?.City ?? '');
  const { setSnackbar } = useSnackbar();
  const handleHttpError = useHandleHttpError();
  const handleOnSave = async () => {
    const newCompany = {
      Name: name,
      Street: street,
      City: city,
      PostalCode: postalCode,
      Number: streetNumber,
      TIN: tin,
    };
    try {
      if (editCompany) {
        await updateCompany({
          IdCompany: editCompany.IdCompany,
          ...newCompany,
        });
        setSnackbar(createSnackbarSuccess('Edytowano firmę'));
      } else {
        await postCompany(newCompany);
        setSnackbar(createSnackbarSuccess('Dodano firmę'));
      }
      fetchCompanies();
    } catch (e) {
      handleHttpError(e);
      // setSnackbar(createSnackbarError('Operacja nie powiodła się!'));
      console.error(e);
    } finally {
      closeDrawer();
    }
  };
  const {
    language: { schema },
  } = useLanguage();

  return (
    <CompanyContentStyle>
      <TextField
        label={schema.name}
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
      />
      <TextField
        label={schema.taxId}
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={tin}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTin(event.target.value)
        }
      />
      <h4>{schema.addressV2}</h4>

      <TextField
        label="Ulica"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={street}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setStreet(event.target.value)
        }
      />
      <TextField
        label="Ulica"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={streetNumber}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setStreetNumber(event.target.value)
        }
      />
      <TextField
        label={schema.postcode}
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={postalCode}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setPostalCode(event.target.value)
        }
      />

      <TextField
        label={schema.town}
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value={city}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCity(event.target.value)
        }
      />

      <Button variant="contained" color="primary" onClick={handleOnSave}>
        {schema.save}
      </Button>
    </CompanyContentStyle>
  );
};

export default CompanyContent;
