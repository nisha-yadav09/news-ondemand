import sendRequest from './send-request';

const BASE_URL = '/api/news/';

export function getAll() {
  console.log(BASE_URL)
  return sendRequest(BASE_URL);
}

export function getScience() {
  return sendRequest(`${BASE_URL}/science`);
}
