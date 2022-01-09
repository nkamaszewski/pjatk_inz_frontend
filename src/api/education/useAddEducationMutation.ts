import { useHandleHttpError } from 'hooks/useHandleHttpError';
import { useMutation } from 'react-query';
import { postEducation } from './Education';

export const useAddEducationMutation = () => {
  const handleHttpError = useHandleHttpError();

  const mutation = useMutation(postEducation, {
    onError: (error: any) => {
      handleHttpError(error);
    },
  });

  return mutation;
};
