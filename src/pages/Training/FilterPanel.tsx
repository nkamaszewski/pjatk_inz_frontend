import { ALL, useFilter } from '../../providers/FilterContext';
import { ChangeEvent } from '../../types/EventTypes';
import styled from 'styled-components';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';

const TRAINING_TYPES = [
  { id: ALL, name: 'Wszystkie' },
  { id: '0', name: 'Zewnętrzne' },
  { id: '1', name: 'Wewnętrzne' },
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
  const {
    language: { schema },
  } = useLanguage();
  return (
    <FilterPanelStyle>
      <h4>Filtruj:</h4>

      <FormControl fullWidth>
        <InputLabel>Rodzaj kursu</InputLabel>
        <Select
          value={filters.internal}
          onChange={handleChangefilter}
          name="internal"
        >
          {TRAINING_TYPES.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </FilterPanelStyle>
  );
};

export default FilterPanel;
