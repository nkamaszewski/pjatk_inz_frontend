import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { ALL, useFilter } from '../../providers/FilterContext';
import { ChangeEvent } from '../../types/EventTypes';

const GROUPS_TYPE = (schema: { all: any; onlyActive: any;}) => ([
  { id: ALL, name: schema.all },
  { id: '1', name: schema.onlyActive },
]);

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
  const {
    language: { schema },
  } = useLanguage();
  return (
    <FilterPanelStyle>
      <h4>{schema.filter}</h4>

      <FormControl fullWidth>
        <InputLabel>{schema.type}</InputLabel>
        <Select
          value={filters.active}
          onChange={handleChangefilter}
          name="active"
        >
          {GROUPS_TYPE(schema).map(({ id, name }) => (
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
