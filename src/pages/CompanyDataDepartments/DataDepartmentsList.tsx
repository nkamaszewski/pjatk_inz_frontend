import { Divider, Drawer } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import { deleteDepartment } from '../../api/Department';
import { deleteDivision } from '../../api/Division';
import DeleteBtn from '../../components/DeleteBtn';
import EditBtn from '../../components/EditBtn';
import {
	createSnackbarError,
	createSnackbarSuccess,
	useSnackbar,
} from '../../providers/NotificationContext';
import { DepartmentDTO } from '../../types/DTO/Department';
import { DivisionDTO } from '../../types/DTO/Division';
import DepartmentFieldset from './DepartmentFieldset';
import DivisionFieldset from './DivisionFieldset';
import { useHandleHttpError } from 'hooks/useHandleHttpError';

const DataDepartmentsListStyle = styled.div`
	padding: 24px;

	.grid-list {
		display: grid;
		grid-template-columns: 1fr 56px 56px;
	}

	.department-list {
		padding-right: 132px;
	}

	p {
		margin: 8px 0;
	}
`;

interface Props {
	divisions: DivisionDTO[];
	departments: DepartmentDTO[];
	fetchDivisionsDepartments: () => void;
}

const DataDepartmentsList = ({
	divisions,
	departments,
	fetchDivisionsDepartments,
}: Props) => {
	const [editDivision, setEditDivision]: [DivisionDTO | null, Function] =
		useState(null);
	const [editDepartment, setEditDepartment]: [DepartmentDTO | null, Function] =
		useState(null);
	const { setSnackbar } = useSnackbar();
	const handleHttpError = useHandleHttpError();
	const handleCloseDivisionDrawer = () => setEditDivision(null);
	const handleCloseDepartmentDrawer = () => setEditDepartment(null);
	const handleDeleteDivision = async (id: string) => {
		try {
			await deleteDivision(id);
			fetchDivisionsDepartments();
			setSnackbar(createSnackbarSuccess('usunięto pion'));
		} catch (e) {
			handleHttpError(e);
		}
	};
	const handleDeleteDepartment = async (id: string) => {
		try {
			await deleteDepartment(id);
			fetchDivisionsDepartments();
			setSnackbar(createSnackbarSuccess('usunięto wydział'));
		} catch (e) {
			handleHttpError(e);
		}
	};
	return (
		<DataDepartmentsListStyle>
			<Drawer
				anchor="right"
				open={Boolean(editDivision)}
				onClose={handleCloseDivisionDrawer}
			>
				<DivisionFieldset
					closeDrawer={handleCloseDivisionDrawer}
					fetchDivisionsDepartments={fetchDivisionsDepartments}
					editDivision={editDivision}
				/>
			</Drawer>
			<Drawer
				anchor="right"
				open={Boolean(editDepartment)}
				onClose={handleCloseDepartmentDrawer}
			>
				<DepartmentFieldset
					closeDrawer={handleCloseDepartmentDrawer}
					fetchDivisionsDepartments={fetchDivisionsDepartments}
					editDepartment={editDepartment}
					divisions={divisions}
				/>
			</Drawer>
			{divisions.map((division) => (
				<div key={division.IdDivision}>
					<div className="grid-list">
						<h3>{division.Name}</h3>
						<EditBtn onClick={() => setEditDivision(division)} />
						<DeleteBtn
							onClick={() => handleDeleteDivision(division.IdDivision)}
						/>
					</div>
					{departments
						.filter(
							(department) => department.IdDivision === division.IdDivision
						)
						.map((department) => (
							<div className="grid-list department-list">
								<p key={department.IdDepartment}>{department.Name}</p>
								<EditBtn onClick={() => setEditDepartment(department)} />
								<DeleteBtn
									onClick={() =>
										handleDeleteDepartment(department.IdDepartment)
									}
								/>
							</div>
						))}
					<Divider />
				</div>
			))}
		</DataDepartmentsListStyle>
	);
};

export default DataDepartmentsList;
