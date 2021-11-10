import { useState } from 'react';

export const useDrawer = () => {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => setOpen(false);
  const openDrawer = () => setOpen(true);

  return { open, openDrawer, closeDrawer };
};
