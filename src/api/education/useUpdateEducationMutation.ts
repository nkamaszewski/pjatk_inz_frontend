import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useMutation } from 'react-query';
import { updateEducation } from './Education';

export const useUpdateEducationMutation = () => {
  const handleHttpError = useHandleHttpError();

  const mutation = useMutation(updateEducation, {
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
