import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderFieldset from '../../components/HeaderFieldset';
import FieldsetStyled from '../../components/styled/FieldsetStyled';
import { DivisionDTO } from '../../types/DTO/Division';
import DivisionContent from './DivisionContent';

interface Props {
	closeDrawer: () => void;

	editDivision: DivisionDTO | null;
}

const DivisionFieldset = ({
	closeDrawer,

	editDivision,
}: Props) => {
	const schema = useLanguageSchema();
	return (
		<FieldsetStyled>
			<HeaderFieldset title={schema.editDivision} closeDrawer={closeDrawer} />
			<DivisionContent closeDrawer={closeDrawer} editDivision={editDivision} />
		</FieldsetStyled>
	);
};

export default DivisionFieldset;
