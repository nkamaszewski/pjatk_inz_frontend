import axios from 'axios';

export const getGroups = () => axios.get('http://localhost:3000/api/groups/');

export const postGroup = (group: {
  Name: string;
  NumberOfPerson: number;
  IdEducation: string;
}) => axios.post('http://localhost:3000/api/groups/', group);
