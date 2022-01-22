import { useQuery } from 'react-query';
import { getApplicationsForRefund } from './ApplicationForRefund';

export const APPLICATION_FOR_REFUND_QUERY_KEY = ['applicationsForRefund'];

export const useApplicationsForRefundQuery = () => {
  const query = useQuery(APPLICATION_FOR_REFUND_QUERY_KEY, () =>
    getApplicationsForRefund()
  );

  return query;
};
