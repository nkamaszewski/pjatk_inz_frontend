import { formatDate } from './formatDate';

export const formatDateTime = (date: string | Date | null | undefined) => {
  if (!date) return null;

  const d = new Date(date);
  const formatedDate = formatDate(date);
  const time = d.toLocaleTimeString();

  return `${formatedDate}T${time}`;
};
