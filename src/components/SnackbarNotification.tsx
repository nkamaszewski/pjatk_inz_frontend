import { Snackbar, SnackbarContent } from "@material-ui/core";
import styled from "styled-components";
import { SnackbarVariant, useSnackbar } from "../providers/NotificationContext";

const SnackbarMessageStyle = styled.div`
	display: flex;
	justify-content: center;
	white-space: pre-line;
`;

const SnackbarNotification = () => {
	const { snackbar } = useSnackbar();

	const getSnackbarClass = (variant: SnackbarVariant): string => {
		switch (variant) {
			case SnackbarVariant.success:
				return "success--background";
			case SnackbarVariant.error:
				return "secondary--background";
			default:
				return "success--background";
		}
	};

	return (
		<Snackbar
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "right",
			}}
			open={snackbar.open}
		>
			<SnackbarContent
				className={getSnackbarClass(snackbar.variant)}
				message={
					<SnackbarMessageStyle>
						<p>{snackbar.message}</p>
					</SnackbarMessageStyle>
				}
			/>
		</Snackbar>
	);
};

export default SnackbarNotification;
