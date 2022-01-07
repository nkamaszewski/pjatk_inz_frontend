import { postEmployment } from 'api/Employment';
import { useLanguage } from 'providers/LanguageProvider';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';
import { useHandleHttpError } from 'hooks/useHandleHttpError';

export const useAddEmploymentMutation = () => {
	const queryClient = useQueryClient();
	const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();
	const handleHttpError = useHandleHttpError();

	const mutation = useMutation(postEmployment, {
		onSuccess: () => {
			queryClient.invalidateQueries('employments');
			setSuccessSnackbar(schema.employmentAdded);
		},
		onError: (error: any) => {
			handleHttpError(error);
			// setErrorSnackbar(error?.message ?? schema.theOperationWasUnsuccessful);
		},
	});
	const {
		language: { schema },
	} = useLanguage();

	return mutation;
};
