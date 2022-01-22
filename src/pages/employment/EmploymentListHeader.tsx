import { capFL } from 'helpers/capitalizeFirstLetter';
import { useLanguageSchema } from 'providers/LanguageProvider';
import HeaderListStyled from '../../components/styled/HeaderListStyled';

const EmploymentListHeader = () => {
	const schema = useLanguageSchema();

	return (
		<HeaderListStyled className="grid-employment">
			<>
				<p>{schema.firstName}</p>
				<p>{schema.lastName}</p>
				<p>{schema.division}</p>
				<p>{schema.department}</p>
				<p>{capFL(schema.position)}</p>
			</>
		</HeaderListStyled>
	);
};

export default EmploymentListHeader;
