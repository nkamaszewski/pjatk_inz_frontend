import axios from 'axios';
import { IRegisterUser } from '../providers/AuthProvider';

export const postRegister = (user: IRegisterUser) =>
  axios.post('http://localhost:3000/register/', user);
