import axios from 'axios';

export const getPersons = () => axios.get('http://localhost:3000/api/persons/');

export const postPerson = (person: {
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: number;
}) => axios.post('http://localhost:3000/api/persons/', person);
