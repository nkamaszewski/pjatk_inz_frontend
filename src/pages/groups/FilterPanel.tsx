import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import styled from 'styled-components';
import { ALL, useFilter } from '../../contexts/FilterContext';
import { ChangeEvent } from '../../types/EventTypes';

const GROUPS_TYPE = [
  { id: ALL, name: 'Wszystkie' },
  { id: '1', name: 'Tylko aktywne' },
];

const FilterPanelStyle = styled.div`
  display: grid;
  grid-template-columns: 80px 160px;
  grid-column-gap: 16px;
`;

const FilterPanel = () => {
  const {
    group: { filters, setFilters },
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
  return (
    <FilterPanelStyle>
      <h4>Filtruj:</h4>

      <FormControl fullWidth>
        <InputLabel>Rodzaj</InputLabel>
        <Select
          value={filters.active}
          onChange={handleChangefilter}
          name="active"
        >
          {GROUPS_TYPE.map(({ id, name }) => (
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
