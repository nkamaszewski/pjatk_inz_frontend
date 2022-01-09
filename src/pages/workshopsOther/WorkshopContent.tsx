import { Button, TextField } from '@material-ui/core';
import { CompanySelect } from 'components/controls_UI/companySelect/CompanySelect';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { OtherEducationDTO } from 'types/DTO/OtherEducation';
import { useWorkshopCRUD } from './useWorkshopCRUD';

const WorkshopContentStyle = styled.div`
  padding: 24px 0;
  display: grid;
  grid-row-gap: 16px;
`;

interface Props {
  closeDrawer: () => void;
  fetchWorkshops: () => void;
  workshop?: OtherEducationDTO | null;
}

export const WorkshopContent = ({
  closeDrawer,
  fetchWorkshops,
  workshop,
}: Props) => {
  const [Name, setName] = useState(workshop ? workshop.Name : '');

  const [IdCompany, setIdcompany] = useState(
    workshop ? workshop.IdCompany : ''
  );

  const [education, setEducation] = useState({
    Price: workshop?.otherEducationEducation.Price ?? 0,
    PriceAccommodation:
      workshop?.otherEducationEducation.PriceAccommodation ?? 0,
    PriceTransit: workshop?.otherEducationEducation.PriceTransit ?? 0,
  });

  const { addItem, editItem } = useWorkshopCRUD();

  const handleOnSave = async () => {
    if (workshop) {
      await editItem({
        IdEducation: workshop.IdEducation,
        Name,
        IdCompany,
        otherEducationEducation: {
          ...education,
          IdEducation: workshop.IdEducation,
        },
      });
    } else {
      await addItem(
        {
          Name,
          IdCompany,
        },
        education
      );
    }
    fetchWorkshops();
    closeDrawer();
  };

  const handleOnEducationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      [event.target.name]: event.target.value,
    }));
  };
  const schema = useLanguageSchema();

  return (
    <WorkshopContentStyle>
      <TextField
        label={schema.name}
        InputLabelProps={{
          shrink: true,
        }}
        value={Name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
      />

      <TextField
        label={schema.price}
        name="Price"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={education.Price}
        onChange={handleOnEducationChange}
      />

      <TextField
        label={schema.accommodationPrice}
        name="PriceAccommodation"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={education.PriceAccommodation}
        onChange={handleOnEducationChange}
      />

      <TextField
        label={schema.theCostOfTransport}
        name="PriceTransit"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={education.PriceTransit}
        onChange={handleOnEducationChange}
      />

      <CompanySelect value={IdCompany} onChange={setIdcompany} />

      <Button variant="contained" color="primary" onClick={handleOnSave}>
        {schema.save}
      </Button>
    </WorkshopContentStyle>
  );
};
