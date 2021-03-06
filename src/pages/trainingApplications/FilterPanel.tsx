import { useFilter } from '../../providers/FilterContext';
import StatusSelect from '../../components/controls_UI/StatusSelect';
import DepartmentSelect from '../../components/controls_UI/departmentSelect/DepartmentSelect';
import { ChangeEvent } from '../../types/EventTypes';
import styled from 'styled-components';
import DivisionSelect from '../../components/controls_UI/divisionSelect/DivisionSelect';
import { useLanguageSchema } from 'providers/LanguageProvider';

const FilterPanelStyle = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(3, 160px);
  grid-column-gap: 16px;
`;

const FilterPanel = () => {
  const {
    workshop: { filters, setFilters },
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

      <StatusSelect
        value={filters.idstatus}
        onChange={(status) =>
          setFilters((prev) => ({
            ...prev,
            idstatus: status,
          }))
        }
        name="idstatus"
      />
      <DepartmentSelect
        value={filters.iddepartment}
        onChange={(value: string) =>
          handleChangefilter({
            target: { value, name: 'iddepartment' },
          } as ChangeEvent)
        }
        name="iddepartment"
        withAll
      />
      <DivisionSelect
        value={filters.iddivision}
        onChange={(value: string) =>
          handleChangefilter({
            target: { value, name: 'iddivision' },
          } as ChangeEvent)
        }
        name="iddivision"
        withAll
      />
    </FilterPanelStyle>
  );
};

export default FilterPanel;
