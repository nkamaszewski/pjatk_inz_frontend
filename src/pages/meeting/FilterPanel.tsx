import GroupSelect from 'components/controls_UI/groupSelect/GroupSelect';
import RoomSelect from 'components/controls_UI/roomSelect/RoomSelect';
import { useLanguage } from 'providers/LanguageProvider';
import styled from 'styled-components';
import { useFilter } from '../../providers/FilterContext';

const FilterPanelStyle = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(2, 160px);
  grid-column-gap: 16px;
`;

export const FilterPanel = () => {
  const {
    meeting: { filters, handleSetFilter },
  } = useFilter();
  const {
    language: { schema },
  } = useLanguage();

  return (
    <FilterPanelStyle>
      <h4>{schema.filter}</h4>

      <GroupSelect
        name="idGroup"
        value={filters.idGroup}
        onChange={(value: string) =>
          handleSetFilter({ name: 'idGroup', value })
        }
        withAll
      />
      <RoomSelect
        name="idRoom"
        value={filters.idRoom}
        onChange={(value: string) => handleSetFilter({ name: 'idRoom', value })}
        withAll
      />
    </FilterPanelStyle>
  );
};
