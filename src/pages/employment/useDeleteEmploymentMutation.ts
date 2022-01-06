import { deleteEmployment } from 'api/Employment';
import { useSnackbar } from 'providers/NotificationContext';
import { useMutation, useQueryClient } from 'react-query';

export const useDeleteEmploymentMutation = () => {
  const queryClient = useQueryClient();
  const { setSuccessSnackbar, setErrorSnackbar } = useSnackbar();

  const mutation = useMutation(
    ({ id }: { id: string }) => deleteEmployment(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('employments');
        setSuccessSnackbar('Usunięto zatrudnienie');
      },
      onError: (error: any) => {
        setErrorSnackbar(error?.message ?? 'Operacja nie udała się');
      },
    }
  );
  return mutation;
};
