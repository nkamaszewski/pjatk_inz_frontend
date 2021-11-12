import { getMeetings } from 'api/Meeting';
import { useFilter } from 'providers/FilterContext';
import { useCallback, useEffect, useState } from 'react';
import { MeetingDTO } from 'types/DTO/Meeting';

export const useMeetingList = () => {
  const [meetings, setMeetings] = useState<MeetingDTO[]>([]);
  const {
    meeting: { filters },
  } = useFilter();

  const fetchMeetings = useCallback(() => {
    try {
      getMeetings(filters).then((res) => {
        setMeetings(res.data);
      });
    } catch (e) {
      console.error(e);
    }
  }, [filters]);

  useEffect(() => {
    fetchMeetings();
  }, [filters, fetchMeetings]);

  return { meetings, fetchMeetings };
};
