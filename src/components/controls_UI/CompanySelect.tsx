import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguage } from 'providers/LanguageProvider';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCompanies, postCompany } from '../../api/Company';
import { CompanyDTO } from '../../types/DTO/Company';

const CompanySelectStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 48px;
`;

interface Props {
  value: string;
  onChange: Function;
}

const EMPTY_COMPANY = {
  IdCompany: '',
  Name: '',
  City: '',
  PostalCode: '',
  Street: '',
  Number: '',
  TIN: '',
} as CompanyDTO;

const CompanySelect = ({ value, onChange }: Props) => {
  const [companies, setCompanies]: [CompanyDTO[], Function] = useState([]);
  const [addingMode, setAddingMode] = useState(false);
  const [company, setCompany] = useState(EMPTY_COMPANY);

  const fetchCompanies = () => {
    try {
      getCompanies().then((res) => {
        setCompanies(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(fetchCompanies, []);

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChange(event.target.value as string);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany((prevCompany) => ({
      ...prevCompany,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnCancel = () => {
    setAddingMode(false);
    setCompany(EMPTY_COMPANY);
  };

  const handleOnConfirm = () => {
    try {
      const uni: any = { ...company };
      delete uni.IdCompany;
      postCompany(uni).then((res) => {
        setAddingMode(false);
        fetchCompanies();
        onChange(res.data.IdCompany);
      });
    } catch (e) {
      console.error(e);
    } finally {
      setCompany(EMPTY_COMPANY);
    }
  };
  const {
    language: { schema },
  } = useLanguage();
  return (
    <CompanySelectStyle>
      <FormControl fullWidth>
        <InputLabel>{capFL(schema.company)}</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {companies.map((comp) => (
            <MenuItem
              key={comp.IdCompany}
              value={comp.IdCompany}
            >{`${comp.Name} ${comp.City}`}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Tooltip title="dodaj firmę">
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>Dodaj firmę do bazy danych</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={company.Name}
            onChange={handleOnChange}
            margin="dense"
            name="Name"
            label="Nazwa"
            type="text"
            fullWidth
          />
          <TextField
            value={company.TIN}
            onChange={handleOnChange}
            margin="dense"
            name="TIN"
            label="TIN"
            type="text"
            fullWidth
          />
          <TextField
            value={company.City}
            onChange={handleOnChange}
            margin="dense"
            name="City"
            label="Miasto"
            type="text"
            fullWidth
          />
          <TextField
            value={company.PostalCode}
            onChange={handleOnChange}
            margin="dense"
            name="PostalCode"
            label="Kod pocztowy"
            type="text"
            fullWidth
          />
          <TextField
            value={company.Street}
            onChange={handleOnChange}
            margin="dense"
            name="Street"
            label="Ulica"
            type="text"
            fullWidth
          />
          <TextField
            value={company.Number}
            onChange={handleOnChange}
            margin="dense"
            name="Number"
            label="Numer"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleOnConfirm} color="primary">
            Dodaj
          </Button>
        </DialogActions>
      </Dialog>
    </CompanySelectStyle>
  );
};

export default CompanySelect;
