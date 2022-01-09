import { ALL, useFilter } from '../../providers/FilterContext';
import { ChangeEvent } from '../../types/EventTypes';
import styled from 'styled-components';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { useLanguageSchema } from 'providers/LanguageProvider';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';

const TRAINING_TYPES = (schema: { all: any; external: any; internal: any }) => [
  { id: ALL, name: schema.all },
  { id: '0', name: schema.external },
  { id: '1', name: schema.internal },
];

const FilterPanelStyle = styled.div`
  display: grid;
  grid-template-columns: 80px 160px;
  grid-column-gap: 16px;
`;

const FilterPanel = () => {
  const {
    training: { filters, setFilters },
  } = useFilter();

  const handleChangefilter = (event: ChangeEvent) => {
    const { name, value } = event.target;
    if (name) {
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const schema = useLanguageSchema();

  return (
    <FilterPanelStyle>
      <h4>{schema.filter}</h4>

      <FormControlStyled>
        <InputLabel>{schema.typeOfCourse}</InputLabel>
        <Select
          value={filters.internal}
          onChange={handleChangefilter}
          name="internal"
        >
          {TRAINING_TYPES(schema).map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControlStyled>
    </FilterPanelStyle>
  );
};

export default FilterPanel;
