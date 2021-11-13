import { useEffect, useState } from 'react';

export const useDelayRender = (wait: number = 250) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, wait);
  }, [wait]);

  return show;
};
