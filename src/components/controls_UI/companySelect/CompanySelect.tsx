import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguage } from 'providers/LanguageProvider';
import React, { useState } from 'react';
import styled from 'styled-components';
import { CompanyDTO } from '../../../types/DTO/Company';
import { useCompaniesQuery } from './useCompaniesQuery';
import { useCompanyMutation } from './useCompanyMutation';

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
  const [addingMode, setAddingMode] = useState(false);
  const [company, setCompany] = useState(EMPTY_COMPANY);
  const companiesQuery = useCompaniesQuery();
  const companyMutation = useCompanyMutation();

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

  const handleOnConfirm = async () => {
    try {
      const uni: any = { ...company };
      delete uni.IdCompany;
      const res = await companyMutation.mutateAsync(uni);
      setAddingMode(false);
      onChange(res.data.IdCompany);
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
      <FormControlStyled>
        <InputLabel>{capFL(schema.company)}</InputLabel>
        <Select value={value} onChange={handleSelectChange}>
          {companiesQuery.data?.data.map((comp) => (
            <MenuItem
              key={comp.IdCompany}
              value={comp.IdCompany}
            >{`${comp.Name} ${comp.City}`}</MenuItem>
          ))}
        </Select>
      </FormControlStyled>
      <Tooltip title={schema.addACompany}>
        <Button
          onClick={() => {
            setAddingMode(true);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Tooltip>
      <Dialog open={addingMode} onClose={() => setAddingMode(false)}>
        <DialogTitle>{schema.addTheCompanyToTheDatabase}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            value={company.Name}
            onChange={handleOnChange}
            margin="dense"
            name="Name"
            label={schema.name}
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
            label={schema.city}
            type="text"
            fullWidth
          />
          <TextField
            value={company.PostalCode}
            onChange={handleOnChange}
            margin="dense"
            name="PostalCode"
            label={schema.postcode}
            type="text"
            fullWidth
          />
          <TextField
            value={company.Street}
            onChange={handleOnChange}
            margin="dense"
            name="Street"
            label={schema.street}
            type="text"
            fullWidth
          />
          <TextField
            value={company.Number}
            onChange={handleOnChange}
            margin="dense"
            name="Number"
            label={schema.number}
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOnCancel} color="primary">
            {schema.cancel}
          </Button>
          <Button onClick={handleOnConfirm} color="primary">
            {schema.add}
          </Button>
        </DialogActions>
      </Dialog>
    </CompanySelectStyle>
  );
};

export default CompanySelect;
