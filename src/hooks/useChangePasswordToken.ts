import { getChangePasswordToken } from 'api/Password';
import { useEffect, useState } from 'react';

export const useChangePasswordToken = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    getChangePasswordToken()
      .then(({ data }) => {
        setToken(data.token);
      })
      .catch((e) => console.error(e));
  }, []);

  return token;
};
