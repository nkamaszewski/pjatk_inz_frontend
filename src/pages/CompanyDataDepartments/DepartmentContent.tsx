import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@material-ui/core';
import { useLanguage } from 'providers/LanguageProvider';
import { useState } from 'react';
import styled from 'styled-components';
import { postDepartment, updateDepartment } from '../../api/Department';
import {
	createSnackbarError,
	createSnackbarSuccess,
	useSnackbar,
} from '../../providers/NotificationContext';
import { DepartmentDTO } from '../../types/DTO/Department';
import { DivisionDTO } from '../../types/DTO/Division';
import { useHandleHttpError } from 'hooks/useHandleHttpError';

const DepartmentContentStyle = styled.div`
	padding: 24px 0;
	display: grid;
	grid-row-gap: 16px;
`;

interface Props {
	divisions: DivisionDTO[];
	closeDrawer: Function;
	fetchDivisionsDepartments: Function;
	editDepartment?: DepartmentDTO | null;
}

const DepartmentContent = ({
	divisions,
	closeDrawer,
	fetchDivisionsDepartments,
	editDepartment,
}: Props) => {
	const [name, setName] = useState(editDepartment?.Name ?? '');
	const [selectedDivision, setSelectedDivision] = useState(
		editDepartment?.IdDivision ?? ''
	);
	const { setSnackbar } = useSnackbar();
	const handleHttpError = useHandleHttpError();

	const handleOnNameChange = (e: any) => {
		e.persist();
		setName(e.target.value);
	};

	const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		setSelectedDivision(event.target.value as string);
	};

	const handleOnSave = async () => {
		const newDepartment = { Name: name, IdDivision: selectedDivision };
		try {
			if (editDepartment) {
				await updateDepartment({
					IdDepartment: editDepartment.IdDepartment,
					...newDepartment,
				});
				fetchDivisionsDepartments();
				setSnackbar(createSnackbarSuccess('edytowano wydział'));
				closeDrawer();
			} else {
				await postDepartment(newDepartment);
				fetchDivisionsDepartments();
				setSnackbar(createSnackbarSuccess('dodano wydział'));
				closeDrawer();
			}
		} catch (e) {
			console.error(e);
			handleHttpError(e);
		}
	};
	const {
		language: { schema },
	} = useLanguage();

	return (
		<DepartmentContentStyle>
			<TextField
				fullWidth
				label={schema.name}
				value={name}
				onChange={handleOnNameChange}
			/>
			<FormControl fullWidth>
				<InputLabel>{schema.department}</InputLabel>
				<Select value={selectedDivision} onChange={handleSelectChange}>
					{divisions.map((division) => (
						<MenuItem value={division.IdDivision}>{division.Name}</MenuItem>
					))}
				</Select>
			</FormControl>
			<Button
				disabled={!Boolean(name) && !Boolean(selectedDivision)}
				variant="contained"
				color="primary"
				onClick={handleOnSave}
			>
				{schema.save}
			</Button>
		</DepartmentContentStyle>
	);
};

export default DepartmentContent;
