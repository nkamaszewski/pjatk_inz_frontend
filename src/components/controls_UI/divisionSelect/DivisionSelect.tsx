import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormControlStyled } from 'components/controls_UI/FormControlStyled';
import { useLanguageSchema } from 'providers/LanguageProvider';
import React from 'react';
import { ErrorHelperText } from '../ErrorHelperText';
import { useDivisionsQuery } from './useDivisionsQuery';

export interface DivisionSelectProps {
	value: string;
	onChange: (id: string) => void;
	onBlur?: (e: React.FocusEvent<any>) => void;
	name?: string;
	withAll?: boolean;
	touched?: boolean;
	error?: string;
}

const DivisionSelect = ({
	value,
	onChange,
	onBlur,
	name,
	withAll = false,
	touched = false,
	error,
}: DivisionSelectProps) => {
	const divisionsQuery = useDivisionsQuery(withAll);
	const schema = useLanguageSchema();

	const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		onChange(event.target.value as string);
	};

	return (
		<FormControlStyled>
			<InputLabel>{schema.division}</InputLabel>
			<Select value={value} onChange={handleSelectChange} name={name}>
				{divisionsQuery.data?.map((division) => (
					<MenuItem key={division.IdDivision} value={division.IdDivision}>
						{division.Name}
					</MenuItem>
				))}
			</Select>
			{touched && error && <ErrorHelperText text={error} />}
		</FormControlStyled>
	);
};

export default DivisionSelect;
