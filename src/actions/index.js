import axios from 'axios';

export const FETCH_STARTUPS = 'fetch_startups';
export const FETCH_STARTUP = 'fetch_startup';
export const CREATE_STARTUP = 'create_startup';
export const DELETE_STARTUP = 'delete_startup';

const ROOT_URL = 'https://bb-se.bhupenderbist.repl.co/startups';

export function fetchStartup() {
  const request = axios.get(`${ROOT_URL}/all`);
  return {
    type: FETCH_STARTUPS,
    payload: request
  };
}

export function createStartup(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/create`, values)
    .then(() => callback());

  return {
    type: CREATE_STARTUP,
    payload: request
  };
}

